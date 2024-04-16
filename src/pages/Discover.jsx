import React, { useState, useEffect } from "react";
import { fetch } from "../utils/fetch";
import CountryCard from "../components/countryCard";
import Filter from "../components/filter";

const Discover = () => {
  const [parentFilter, setParentFilter] = useState("all");
  const [displayedData, setDisplayedData] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleFilterChange = (newFilter) => {
    setParentFilter(newFilter);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch();
        console.log(result);
        setData(result);
        setDisplayedData(result); // Initially, display all data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      let filteredData;
      if (parentFilter !== "all") {
        filteredData = data.filter((item) => item.region === parentFilter);
      } else {
        filteredData = [...data];
      }

      filteredData.sort((a, b) => a.name.common.localeCompare(b.name.common));

      setDisplayedData(filteredData);
    }
  }, [data, parentFilter]);

  return (
    <div className="h-full">
      <Filter onFilterChange={handleFilterChange} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-auto h-3/6">
          <div className="mt-16 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-5 p-4">
            {displayedData.map((item, index) => (
              <CountryCard country={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Discover;
