import { createContext, useState, useEffect } from "react";

import { getDocuments } from "../utils/firebase/firebase.utils";

export const RealEstateContext = createContext({
  realEstateMap: {},
  countiesChecked: {},
  valuesChecked: {}
});

const getCountiesChecked = (nestedDict) => {
  const countiesChecked = {};

  for (const county in nestedDict) {
    countiesChecked[county] = false;
  }

  return countiesChecked;
};

const getValuesChecked = (nestedDict) => {
  const valuesChecked = {};

  for (const county in nestedDict) {
    for (const year in nestedDict[county]) {
      for (const month in nestedDict[county][year]) {
        for (const value in nestedDict[county][year][month]["vanzari"]){
          valuesChecked[value] = false;
        }
      }
    }
  }

  return valuesChecked;
};

export const RealEstateProvider = ({ children }) => {
  const [realEstateMap, setRealEstateMap] = useState({});
  const [countiesChecked, setCountiesChecked] = useState({});
  const [valuesChecked, setValuesChecked] = useState({});

  useEffect(() => {
    const getRealEstateMap = async () => {
      const result = await getDocuments("real-estate-data");

      setRealEstateMap(result);

      const countiesChecked = getCountiesChecked(result);
      setCountiesChecked(countiesChecked);

      const valuesChecked = getValuesChecked(result);
      setValuesChecked(valuesChecked);

    };

    getRealEstateMap();
  }, []);

  const value = { realEstateMap, countiesChecked, valuesChecked };
  return (
    <RealEstateContext.Provider value={value}>
      {children}
    </RealEstateContext.Provider>
  );
};
