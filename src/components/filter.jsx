import React, { useState, useEffect } from "react";

const Filter = (props) => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
  };

  useEffect(() => {
    console.log("filtre " + filter);
    props.onFilterChange(filter);
  }, [filter, props]); // Add filter to the dependency array

  return (
    <form class="max-w-sm mx-auto p-4 select">
      <select
        name="filter"
        onChange={handleFilterChange}
        value={filter}
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
        <option value="Asia">Asia</option>
        <option value="Antarctic">Antarctic</option>
      </select>
    </form>
  );
};

export default Filter;
