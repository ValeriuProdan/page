import { useState, useEffect, useCallback, useRef } from 'react';
import './Gallery.css';

const PREVIEW_COUNT = 6;

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.5;
const DOUBLE_CLICK_ZOOM = 2.5;
const DRAG_THRESHOLD = 4; // px of movement before a drag suppresses the closing click
const SWIPE_THRESHOLD = 55; // px of horizontal travel that changes image
const SLIDE_MS = 320; // keep in step with the .lightbox-track transition

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);


export default function Gallery({ photos }) {
  const galleryImages = photos.map(([src]) => `/media/${src}`);
  const title = "Photography by Valeriu Prodan";
  // null, or { kind: 'gallery', index } / { kind: 'plan' }
  const [lightbox, setLightbox] = useState(null);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [swipeDx, setSwipeDx] = useState(0);
  // Direction the track is animating toward: -1 previous, +1 next, 0 at rest
  const [slideDir, setSlideDir] = useState(0);
  const [instant, setInstant] = useState(false); // suppress the re-centring frame

  const lightboxRef = useRef(null);
  const imageRef = useRef(null);
  const dragStart = useRef(null);
  const pinchStart = useRef(null);
  const suppressClick = useRef(false);
  const isGallery = lightbox?.kind === 'gallery';
  const total = galleryImages.length;
  const canSwipe = isGallery && total > 1;
  // The track always holds previous / current / next so a swipe reveals a real
  // neighbour rather than swapping the image in place.
  const slideIndexes = isGallery
    ? [(lightbox.index - 1 + total) % total, lightbox.index, (lightbox.index + 1) % total]
    : [];
  const lightboxSrc = lightbox
    ? isGallery
      ? galleryImages[lightbox.index]
      : ''
    : null;

  const resetZoom = useCallback(() => {
    setZoom(MIN_ZOOM);
    setOffset({ x: 0, y: 0 });
    setSwipeDx(0);
    setSlideDir(0);
  }, []);

  // Keep the image from being dragged out of view: at scale s the picture is
  // s times larger, so it may travel half the overflow in each direction.
  const clampOffset = useCallback((next, scale) => {
    const el = imageRef.current;
    if (!el) return next;
    const maxX = (el.offsetWidth * (scale - 1)) / 2;
    const maxY = (el.offsetHeight * (scale - 1)) / 2;
    return {
      x: clamp(next.x, -maxX, maxX),
      y: clamp(next.y, -maxY, maxY),
    };
  }, []);

  const applyZoom = useCallback(
    (nextZoom) => {
      const target = clamp(nextZoom, MIN_ZOOM, MAX_ZOOM);
      setZoom(target);
      setOffset((prev) => (target === MIN_ZOOM ? { x: 0, y: 0 } : clampOffset(prev, target)));
    },
    [clampOffset]
  );

  const zoomBy = useCallback((delta) => applyZoom(zoom + delta), [applyZoom, zoom]);

  const openLightbox = (index) => {
    resetZoom();
    setLightbox({ kind: 'gallery', index });
  };

  const closeLightbox = useCallback(() => {
    if (lightbox?.kind === 'gallery') {
    }
    setLightbox(null);
    resetZoom();
  }, [lightbox, resetZoom]);

  // Start the slide. The index only changes once the animation has finished,
  // so the outgoing image stays on screen while it travels.
  const requestSlide = useCallback(
    (direction) => {
      if (!canSwipe || slideDir !== 0) return;
      setZoom(MIN_ZOOM);
      setOffset({ x: 0, y: 0 });
      setSlideDir(direction);
    },
    [canSwipe, slideDir]
  );

  // Commit on a timer rather than transitionend: deterministic, and it cannot
  // be missed if the transition is interrupted or never fires.
  useEffect(() => {
    if (slideDir === 0 || !isGallery) return undefined;
    const id = setTimeout(() => {
      const newIndex = (lightbox.index + slideDir + total) % total;
      setInstant(true); // re-centre the track without animating back
      setLightbox({ kind: 'gallery', index: newIndex });
      setSlideDir(0);
      setSwipeDx(0);
    }, SLIDE_MS);
    return () => clearTimeout(id);
  }, [slideDir, isGallery, lightbox, total]);

  // Drop the no-transition flag once the re-centred frame has been painted
  useEffect(() => {
    if (!instant) return undefined;
    let inner;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setInstant(false));
    });
    return () => {
      cancelAnimationFrame(outer);
      if (inner) cancelAnimationFrame(inner);
    };
  }, [instant]);

  const nextImage = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      requestSlide(1);
    },
    [requestSlide]
  );

  const prevImage = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      requestSlide(-1);
    },
    [requestSlide]
  );

  // Keyboard: navigate the gallery, zoom, and close
  useEffect(() => {
    if (!lightbox) return undefined;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
          if (isGallery) nextImage();
          break;
        case 'ArrowLeft':
          if (isGallery) prevImage();
          break;
        case 'Escape':
          closeLightbox();
          break;
        case '+':
        case '=':
          zoomBy(ZOOM_STEP);
          break;
        case '-':
          zoomBy(-ZOOM_STEP);
          break;
        case '0':
          resetZoom();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox, isGallery, nextImage, prevImage, closeLightbox, zoomBy, resetZoom]);

  // Wheel zoom and pinch zoom need non-passive listeners to suppress page scroll
  useEffect(() => {
    const node = lightboxRef.current;
    if (!node) return undefined;

    const onWheel = (e) => {
      e.preventDefault();
      applyZoom(zoom + (e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP));
    };

    const distance = (touches) =>
      Math.hypot(
        touches[0].clientX - touches[1].clientX,
        touches[0].clientY - touches[1].clientY
      );

    const onTouchStart = (e) => {
      if (e.touches.length === 2) {
        pinchStart.current = { distance: distance(e.touches), zoom };
      }
    };

    const onTouchMove = (e) => {
      if (e.touches.length === 2 && pinchStart.current) {
        e.preventDefault();
        const ratio = distance(e.touches) / pinchStart.current.distance;
        applyZoom(pinchStart.current.zoom * ratio);
      }
    };

    const onTouchEnd = (e) => {
      if (e.touches.length < 2) pinchStart.current = null;
    };

    node.addEventListener('wheel', onWheel, { passive: false });
    node.addEventListener('touchstart', onTouchStart, { passive: true });
    node.addEventListener('touchmove', onTouchMove, { passive: false });
    node.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      node.removeEventListener('wheel', onWheel);
      node.removeEventListener('touchstart', onTouchStart);
      node.removeEventListener('touchmove', onTouchMove);
      node.removeEventListener('touchend', onTouchEnd);
    };
  }, [lightbox, zoom, applyZoom]);

  // Lock page scrolling while the lightbox is open
  useEffect(() => {
    if (!lightbox) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [lightbox]);

  const onPointerDown = (e) => {
    if (zoom <= MIN_ZOOM && !canSwipe) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      offsetX: offset.x,
      offsetY: offset.y,
      moved: 0,
    };
    setIsDragging(true);
  };

  const onPointerMove = (e) => {
    const start = dragStart.current;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    start.moved = Math.max(start.moved, Math.abs(dx) + Math.abs(dy));

    if (zoom > MIN_ZOOM) {
      setOffset(clampOffset({ x: start.offsetX + dx, y: start.offsetY + dy }, zoom));
    } else if (canSwipe && Math.abs(dx) > Math.abs(dy)) {
      // Follow the finger so the swipe feels attached to the image
      setSwipeDx(dx);
    }
  };

  const onPointerUp = () => {
    const start = dragStart.current;
    dragStart.current = null;
    setIsDragging(false);
    if (!start) return;
    if (start.moved > DRAG_THRESHOLD) suppressClick.current = true;

    if (zoom <= MIN_ZOOM && canSwipe) {
      // Keep swipeDx: the track animates on from where the finger left it
      if (swipeDx <= -SWIPE_THRESHOLD) requestSlide(1);
      else if (swipeDx >= SWIPE_THRESHOLD) requestSlide(-1);
      else setSwipeDx(0); // under the threshold, spring back
    }
  };

  const handleBackdropClick = () => {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    closeLightbox();
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    applyZoom(zoom > MIN_ZOOM ? MIN_ZOOM : DOUBLE_CLICK_ZOOM);
  };

  useEffect(() => {
    if (!lightbox) return;
    const previous = document.activeElement;
    const node = lightboxRef.current;
    node.querySelector('button')?.focus();
    const trap = event => {
      if (event.key !== 'Tab') return;
      const buttons = [...node.querySelectorAll('button:not(:disabled)')];
      const current = buttons.indexOf(document.activeElement);
      event.preventDefault();
      buttons[(current + (event.shiftKey ? -1 : 1) + buttons.length) % buttons.length]?.focus();
    };
    node.addEventListener('keydown', trap);
    return () => { node.removeEventListener('keydown', trap); previous?.focus(); };
  }, [!!lightbox]);
  return <section className="apartment-gallery" aria-labelledby="gallery-heading">
    <div className="section-header"><h2 id="gallery-heading">Photo gallery</h2><div className="section-divider"/><p>Click a photograph to see all {photos.length} images</p></div>
          <div className="gallery-grid gallery-preview">
            {galleryImages.slice(0, PREVIEW_COUNT).map((img, index) => (
              <button
                type="button"
                aria-label={`Open photograph ${index + 1}`}
                key={index}
                className={`gallery-item ${index === 0 ? 'featured' : ''}`}
                onClick={() => openLightbox(index)}
              >
                <img src={img} alt={`${title} ${index + 1}`} loading="lazy" />
                {index === PREVIEW_COUNT - 1 && galleryImages.length > PREVIEW_COUNT ? (
                  <div className="gallery-item-overlay gallery-more">
                    <span className="more-count">+{galleryImages.length - PREVIEW_COUNT}</span>
                    <span className="more-text">photos</span>
                  </div>
                ) : (
                  <div className="gallery-item-overlay">
                    <span className="zoom-icon">🔍</span>
                  </div>
                )}
              </button>
            ))}
          </div>      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo gallery" ref={lightboxRef} onClick={handleBackdropClick}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close gallery">
            ×
          </button>

          {isGallery && galleryImages.length > 1 && (
            <>
              <button className="lightbox-prev" onClick={prevImage} aria-label="Previous photograph">
                ‹
              </button>
              <button className="lightbox-next" onClick={nextImage} aria-label="Next photograph">
                ›
              </button>
            </>
          )}

          {isGallery ? (
            <div
              className="lightbox-track"
              style={{
                transform:
                  slideDir === 0
                    ? `translateX(calc(-100% / 3 + ${swipeDx}px))`
                    : slideDir > 0
                    ? 'translateX(calc(-200% / 3))'
                    : 'translateX(0%)',
                transition:
                  instant || isDragging ? 'none' : `transform ${SLIDE_MS}ms ease-out`,
              }}
            >
              {slideIndexes.map((imageIndex, position) => {
                const isCurrent = position === 1;
                return (
                  // Keyed by position so the nodes persist and only src changes:
                  // the incoming image is already decoded from its neighbour slot.
                  <div className="lightbox-slide" key={position}>
                    <img
                      ref={isCurrent ? imageRef : undefined}
                      src={galleryImages[imageIndex]}
                      alt={`${title} ${imageIndex + 1}`}
                      className="lightbox-image"
                      draggable={false}
                      style={
                        isCurrent
                          ? {
                              transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                              transition: isDragging ? 'none' : 'transform 0.2s ease',
                              cursor:
                                zoom > MIN_ZOOM ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
                            }
                          : undefined
                      }
                      onClick={(e) => e.stopPropagation()}
                      onDoubleClick={isCurrent ? toggleZoom : undefined}
                      onPointerDown={isCurrent ? onPointerDown : undefined}
                      onPointerMove={isCurrent ? onPointerMove : undefined}
                      onPointerUp={isCurrent ? onPointerUp : undefined}
                      onPointerCancel={isCurrent ? onPointerUp : undefined}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <img
              ref={imageRef}
              src={lightboxSrc}
              alt="Plan apartament"
              className="lightbox-image"
              draggable={false}
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                transition: isDragging ? 'none' : 'transform 0.2s ease',
                cursor: zoom > MIN_ZOOM ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
              }}
              onClick={(e) => e.stopPropagation()}
              onDoubleClick={toggleZoom}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            />
          )}

          <div className="lightbox-zoom" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => zoomBy(-ZOOM_STEP)} disabled={zoom <= MIN_ZOOM} aria-label="Zoom out">
              −
            </button>
            <span className="lightbox-zoom-level">{Math.round(zoom * 100)}%</span>
            <button onClick={() => zoomBy(ZOOM_STEP)} disabled={zoom >= MAX_ZOOM} aria-label="Zoom in">
              +
            </button>
            <button onClick={resetZoom} disabled={zoom === MIN_ZOOM} aria-label="Reset zoom">
              ⟲
            </button>
          </div>

          {isGallery && (
            <div className="lightbox-counter">
              {lightbox.index + 1} / {galleryImages.length}
            </div>
          )}
        </div>
      )}

</section>;
}
