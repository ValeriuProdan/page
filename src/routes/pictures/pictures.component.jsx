import { useContext, useMemo, useState, useCallback, useRef, useEffect } from "react";

import { PicturesContext } from "../../contexts/pictures.context";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import {
  PicturesContainer,
  PicturesTitle,
  PicturesGrid,
  PictureItem,
  PictureWrapper,
} from "./pictures.styles";

const GRID_ROW_HEIGHT = 10; // pixels per grid row unit

const Pictures = () => {
  const { picturesMap } = useContext(PicturesContext);
  const [imageSpans, setImageSpans] = useState({});
  const gridRef = useRef(null);
  const [columnWidth, setColumnWidth] = useState(420); // default column width (280 * 1.5)

  // Convert to array and memoize for performance
  const picturesArray = useMemo(() => {
    if (!picturesMap) return [];
    // Handle both array and object formats
    if (Array.isArray(picturesMap)) {
      return picturesMap.filter(Boolean);
    }
    if (typeof picturesMap === 'object') {
      return Object.values(picturesMap).filter(Boolean);
    }
    return [];
  }, [picturesMap]);

  // Calculate column width on resize and when images load
  useEffect(() => {
    const calculateColumnWidth = () => {
      if (!gridRef.current) return;
      
      const grid = gridRef.current;
      
      // Wait a bit for grid to render, then get actual column width
      requestAnimationFrame(() => {
        if (!gridRef.current) return;
        
        // Get the actual column width from the first grid item
        if (grid.children.length > 0) {
          const firstItem = grid.children[0];
          const actualColumnWidth = firstItem.offsetWidth;
          if (actualColumnWidth > 0) {
            setColumnWidth(actualColumnWidth);
            return;
          }
        }
        
        // Fallback: estimate based on viewport and grid styles (1.5x bigger)
        const viewportWidth = window.innerWidth;
        const containerPadding = 40; // from PicturesContainer padding
        const gridGap = 20;
        let estimatedWidth = 420; // 280 * 1.5
        
        if (viewportWidth < 480) {
          estimatedWidth = Math.min(180, (viewportWidth - containerPadding - gridGap) / 2);
        } else if (viewportWidth < 768) {
          estimatedWidth = Math.min(225, (viewportWidth - containerPadding - gridGap * 2) / 3);
        } else if (viewportWidth < 1024) {
          estimatedWidth = Math.min(330, (viewportWidth - containerPadding - gridGap * 3) / 4);
        } else {
          const maxWidth = 1400;
          const availableWidth = Math.min(viewportWidth, maxWidth) - containerPadding;
          estimatedWidth = Math.min(420, (availableWidth - gridGap * 4) / 5);
        }
        
        setColumnWidth(Math.max(100, estimatedWidth));
      });
    };

    // Use ResizeObserver for better performance
    const resizeObserver = new ResizeObserver(() => {
      calculateColumnWidth();
    });

    if (gridRef.current) {
      resizeObserver.observe(gridRef.current);
    }

    // Also calculate on window resize
    window.addEventListener('resize', calculateColumnWidth);
    
    // Initial calculation with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(calculateColumnWidth, 100);
    
    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', calculateColumnWidth);
    };
  }, [picturesArray.length]);

  // Store image aspect ratios for recalculation
  const imageAspectRatios = useRef({});

  // Calculate span when image loads (progressive loading)
  const handleImageLoad = useCallback((imageUrl, event) => {
    const img = event.target;
    if (!img.naturalWidth || !img.naturalHeight) return;
    
    const aspectRatio = img.naturalHeight / img.naturalWidth;
    imageAspectRatios.current[imageUrl] = aspectRatio;
    
    // Calculate the exact height needed based on column width and aspect ratio
    // Then convert to grid rows (each row is GRID_ROW_HEIGHT px)
    // Add gap compensation (gap is typically 20px, which is 2 grid units)
    const imageHeight = columnWidth * aspectRatio;
    const span = Math.max(15, Math.round(imageHeight / GRID_ROW_HEIGHT));
    
    setImageSpans(prev => ({ ...prev, [imageUrl]: span }));
  }, [columnWidth]);

  // Recalculate all spans when column width changes
  useEffect(() => {
    if (Object.keys(imageAspectRatios.current).length === 0) return;
    
    const newSpans = {};
    Object.entries(imageAspectRatios.current).forEach(([imageUrl, aspectRatio]) => {
      const imageHeight = columnWidth * aspectRatio;
      newSpans[imageUrl] = Math.max(15, Math.round(imageHeight / GRID_ROW_HEIGHT));
    });
    
    setImageSpans(newSpans);
  }, [columnWidth]);

  return (
    <PicturesContainer>
      <PicturesTitle>
        These pictures are made by me, most of them with my phone. Hope you enjoy
        them!
      </PicturesTitle>
      <PhotoProvider>
        <PicturesGrid ref={gridRef}>
          {picturesArray.map((imageUrl, index) => {
            // Calculate a reasonable default span based on square-ish aspect ratio
            const defaultSpan = Math.round((columnWidth * 1.0) / GRID_ROW_HEIGHT);
            const span = imageSpans[imageUrl] || defaultSpan;
            
            return (
              <PhotoView key={`${imageUrl}-${index}`} src={imageUrl}>
                <PictureItem span={span}>
                  <PictureWrapper>
                    <img
                      src={imageUrl}
                      alt={`Picture ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      onLoad={(e) => handleImageLoad(imageUrl, e)}
                      onError={(e) => {
                        console.error('Failed to load image:', imageUrl);
                      }}
                    />
                  </PictureWrapper>
                </PictureItem>
              </PhotoView>
            );
          })}
        </PicturesGrid>
      </PhotoProvider>
    </PicturesContainer>
  );
};

export default Pictures;
