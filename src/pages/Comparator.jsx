import React, { useEffect, useState } from "react";
import { fetch } from "../utils/fetch";
import CountryInfoComparator from "../components/CountryInfoComparator";

const Comparator = () => {
  const [displayedData, setDisplayedData] = useState([]);
  const [data, setData] = useState(null);
  const [countries, setCountries] = useState([]);
  const [secondCountries, setSecondCountries] = useState([]);
  const [firstCountry, setFirstCountry] = useState(null);
  const [secondCountry, setSecondCountry] = useState(null);

  const getCountry = (e, pos) => {
    let target = e.target.value;
    target = target.charAt(0).toUpperCase() + target.slice(1); // Capitalize the first letter
    let matchingCountries = data.filter((country) =>
      country.name.common.includes(target)
    );
    if (pos === 0) {
      if (target === "") {
        setCountries([]);
      } else {
        setCountries(matchingCountries);
      }
    } else {
      if (target === "") {
        setSecondCountries([]);
      } else {
        setSecondCountries(matchingCountries);
      }
    }
  };

  const selectCountry = (e, pos) => {
    const selectedCountryName = e.target.alt;
    if (pos == 1) {
      countries.forEach((country) => {
        if (country.name.common === selectedCountryName) {
          setCountries([]);
          setFirstCountry(country);
        }
      });
    } else {
      secondCountries.forEach((country) => {
        if (country.name.common === selectedCountryName) {
          setSecondCountries([]);
          setSecondCountry(country);
        }
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch();
        setData(result);
        setDisplayedData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        // You could also display an error message to the UI here
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(firstCountry, secondCountry);
  }, [firstCountry, secondCountry]);

  return (
    <div className="h-screen p-4">
      <div className="flex flex-col md:flex-row md:gap-2 w-full md:justify-between">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <input type="text" onChange={(e) => getCountry(e, 0)} />
          <div
            className={
              countries.length > 0
                ? "visible h-auto md:h-48 w-full md:w-96 p-3 overflow-x-auto flex flex-row gap-8"
                : "hidden"
            }
          >
            {countries.map((country, index) => (
              <div key={index} className="image-container">
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  className="responsive-image md:h-24 w-auto" // Add Tailwind classes for responsiveness
                  onClick={(e) => selectCountry(e, 1)}
                />
              </div>
            ))}
          </div>
          <div className={firstCountry !== null ? "visible" : "hidden"}>
            {firstCountry !== null && (
              <CountryInfoComparator country={firstCountry} />
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <input type="text" onChange={(e) => getCountry(e, 2)} />
          <div
            className={
              secondCountries.length > 0
                ? "visible h-auto md:h-48 w-full md:w-96 p-3 overflow-x-auto flex flex-row gap-8"
                : "hidden"
            }
          >
            {secondCountries.map((country, index) => (
              <div key={index} className="image-container">
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  className="responsive-image md:h-24 w-auto" // Add Tailwind classes for responsiveness
                  onClick={(e) => selectCountry(e, 2)}
                />
              </div>
            ))}
          </div>
          <div className={secondCountry !== null ? "visible" : "hidden"}>
            {secondCountry !== null && (
              <CountryInfoComparator country={secondCountry} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparator;
