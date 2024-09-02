import React, { useEffect, useRef, useState } from "react";
import { fetch } from "../utils/fetch";
import CountryBtn from "./countryBtn";

const GameController = () => {
  const [displayedData, setDisplayedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const randomCountryRef = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch();
        setDisplayedData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (displayedData.length > 0) {
      const uniqueEntries = new Set();
      while (uniqueEntries.size < 4) {
        uniqueEntries.add(getRandomInt(0, displayedData.length));
      }
      randomCountryRef.current = Array.from(uniqueEntries).map(
        (index) => displayedData[index]
      );
      console.log(randomCountryRef.current);
      setLoading(false);
    }
  }, [displayedData]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return (
    <div className="flex flex-col justify-end items-center bg-gradient-to-b from-bgr1 to-bgr2 rounded-tl-xl rounded-tr-xl p-4 md:p-8  absolute bottom-0 shadow-2xl">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {loading ? (
          <p>Loading...</p>
        ) : (
          randomCountryRef.current.map((country, index) => (
            <CountryBtn key={index} country={country} />
          ))
        )}
      </div>
    </div>
  );
};

export default GameController;
