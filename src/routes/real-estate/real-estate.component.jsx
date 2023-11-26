import React, { useState, useContext } from "react";

import { RealEstateContext } from "../../contexts/real-estate.context";
import MultiLineChart from "../../components/line-chart/multi-line-chart.component";

import {
  CheckBoxesContainer,
  SettingsContainer,
  SettingContainer,
} from "./real-estate.styles";

const getVanzariData = (realEstateMap) => {
  const filteredData = {};

  for (const county in realEstateMap) {
    const countyResult = {};

    for (const year in realEstateMap[county]) {
      if (parseInt(year) < 2017) {
        continue;
      }
      for (const month in realEstateMap[county][year]) {
        const date = "" + year + "-" + month;
        countyResult[date] =
          realEstateMap[county][year][month]["vanzari"]["UnitatiIndividuale"];
      }
    }
    const countyResultSorted = {};

    const sortedDates = Object.keys(countyResult);
    sortedDates.sort();

    sortedDates.forEach((date) => {
      countyResultSorted[date] = countyResult[date];
    });

    const name = county;
    filteredData[name] = countyResultSorted;
  }

  return filteredData;
};

const getFilteredData = (realEstateMap, checkedCities, checkedValues) => {
  const filteredData = {};

  for (const county in realEstateMap) {
    for (const value in checkedValues) {
      if (checkedCities[county] && checkedValues[value]) {
        const countyResult = {};

        for (const year in realEstateMap[county]) {
          for (const month in realEstateMap[county][year]) {
            const date = "" + year + "-" + month;
            countyResult[date] =
              realEstateMap[county][year][month]["vanzari"][value];
          }
        }
        const countyResultSorted = {};

        const sortedDates = Object.keys(countyResult);
        sortedDates.sort();

        sortedDates.forEach((date) => {
          countyResultSorted[date] = countyResult[date];
        });

        const name = county + " " + value;
        filteredData[name] = countyResultSorted;
      }
    }
  }

  return filteredData;
};

const getYearlyFilteredData = (realEstateMap, checkedCities, checkedValues) => {
  const filteredData = {};

  for (const county in realEstateMap) {
    for (const value in checkedValues) {
      if (checkedCities[county] && checkedValues[value]) {
        for (const year in realEstateMap[county]) {
          const countyResult = {};
          for (const month in realEstateMap[county][year]) {
            const monthNum = Number(month);
            countyResult[monthNum] =
              realEstateMap[county][year][month]["vanzari"][value];
          }

          const countyResultSorted = {};

          const sortedDates = Object.keys(countyResult);
          sortedDates.sort();

          sortedDates.forEach((date) => {
            countyResultSorted[date] = countyResult[date];
          });

          const name = county + " " + year + " " + value;
          filteredData[name] = countyResultSorted;
        }
      }
    }
  }

  return filteredData;
};

const RealEstate = () => {
  const { realEstateMap, countiesChecked, valuesChecked } =
    useContext(RealEstateContext);

  // Use state to manage the checked state for each city
  const [checkedCities, setCheckedCities] = useState(() => {
    const initialCheckedState = {};
    Object.keys(countiesChecked).forEach((city) => {
      initialCheckedState[city] = countiesChecked[city];
    });

    return initialCheckedState;
  });

  const [checkedValues, setCheckedValues] = useState(() => {
    const initialCheckedState = {};
    Object.keys(valuesChecked).forEach((value) => {
      initialCheckedState[value] = valuesChecked[value];
    });
    return initialCheckedState;
  });

  // Function to handle checkbox toggling
  const handleCityCheckboxChange = (city) => {
    setCheckedCities((prevCheckedCities) => ({
      ...prevCheckedCities,
      [city]: !prevCheckedCities[city],
    }));
  };

  // Function to handle checkbox toggling
  const handleValueCheckboxChange = (value) => {
    setCheckedValues((prevCheckedValues) => ({
      ...prevCheckedValues,
      [value]: !prevCheckedValues[value],
    }));
  };

  const data = getVanzariData(realEstateMap);

  const filteredData = getFilteredData(
    realEstateMap,
    checkedCities,
    checkedValues
  );

  const yearlyFilteredData = getYearlyFilteredData(
    realEstateMap,
    checkedCities,
    checkedValues
  );

  return (
    <div>
      <h3 style={{ margin: "0px 20px" }}>
        Grafice bazate pe datele extrase de pe siteul{" "}
        <a href="https://www.ancpi.ro/statistici">ANCPI</a>
      </h3>

      <MultiLineChart
        data={data}
        title="UnitatiIndividuale per Judet"
        xName="Data"
        yName="Numar unitati Individuale"
      />
      <h3 style={{ margin: "0px 20px" }}>
        Alege cel putin un judet si un tip de proprietate pentru graficele de
        dedesubt. (Bucuresti este separat de Ilfov). Inainte de 2017 doar
        numarul total de proprietati este raportat.
      </h3>
      <SettingsContainer>
        <SettingContainer>
          <h3>Alege judetele</h3>
          <CheckBoxesContainer>
            {Object.entries(countiesChecked).map(([city, isChecked]) => (
              <div key={city}>
                <label>
                  <input
                    type="checkbox"
                    checked={checkedCities[city]}
                    onChange={() => handleCityCheckboxChange(city)}
                  />
                  <span>{city}</span>
                </label>
              </div>
            ))}
          </CheckBoxesContainer>
        </SettingContainer>
        <SettingContainer>
          <h3>Alege tipul de proprietati</h3>{" "}
          <CheckBoxesContainer>
            {Object.entries(valuesChecked).map(([value, isChecked]) => (
              <div key={value}>
                <label>
                  <input
                    type="checkbox"
                    checked={checkedValues[value]}
                    onChange={() => handleValueCheckboxChange(value)}
                  />
                  <span>{value}</span>
                </label>
              </div>
            ))}
          </CheckBoxesContainer>
        </SettingContainer>
      </SettingsContainer>

      <h3 style={{ margin: "0px 20px" }}>
        Numarul de linii ale acestui grafic va fi produsul dintre numarul de
        orase si numarul de tipuri de propietati.
      </h3>
      <MultiLineChart
        data={filteredData}
        title="Grupare pe Judet si Tip proprietate"
        xName="Data"
        yName="Valoare"
      />

      <h3 style={{ margin: "0px 20px" }}>
        {" "}
        Numarul de linii ale acestui grafic va fi produsul dintre numarul de
        orase, numarul de tipuri de propietati si numarul de ani disponibili.
      </h3>

      <MultiLineChart
        data={yearlyFilteredData}
        title="Grupare pe Judet, Tip proprietate si An "
        xName="Luna"
        yName="Valoare"
      />
    </div>
  );
};

export default RealEstate;
