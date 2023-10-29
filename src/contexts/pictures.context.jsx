import { createContext, useState, useEffect } from "react";

import { getDocuments } from "../utils/firebase/firebase.utils";

export const PicturesContext = createContext({
  picturesMap: {},
});

export const PicturesProvider = ({ children }) => {
  const [picturesMap, setPicturesMap] = useState({});

  useEffect(() => {
    const getPicturesMap = async () => {
      const result = await getDocuments("pictures");

      setPicturesMap(result);
    };

    getPicturesMap();
  }, []);

  const value = { picturesMap };
  return (
    <PicturesContext.Provider value={value}>
      {children}
    </PicturesContext.Provider>
  );
};
