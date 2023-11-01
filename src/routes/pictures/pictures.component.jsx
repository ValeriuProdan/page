import { Fragment, useContext } from "react";

import { PicturesContext } from "../../contexts/pictures.context";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Pictures = () => {
  const { picturesMap } = useContext(PicturesContext);

  return (
    <div>
      <h2>
        These pictues are made by me, most of them with my phone. Hope you enjoy
        them!
      </h2>
      <PhotoProvider>
        <div>
          {Object.keys(picturesMap)
            .sort()
            .map((id) => {
              const { imageUrl } = picturesMap[id];
              return (
                <Fragment>
                  <PhotoView key={id} src={imageUrl}>
                    <img
                      src={imageUrl}
                      style={{ height: 400, margin: 5, borderRadius: 10 }}
                      alt={id}
                    />
                  </PhotoView>
                </Fragment>
              );
            })}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Pictures;
