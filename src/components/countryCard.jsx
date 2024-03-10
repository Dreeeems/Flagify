import React, { useState } from "react";

const CountryCard = (props) => {
  const [actualCountry, setActualCountry] = useState(null);
  let data = props.country;
  let id = props.id;
  let firstCurrency;
  let languages;

  if (props.country.currencies) {
    firstCurrency = Object.values(props.country.currencies)[0];
  } else {
    firstCurrency = undefined;
  }

  if (props.country.languages) {
    languages = Object.values(props.country.languages)[0];
  } else {
    languages = undefined;
  }

  const handleCardMouseOver = () => {
    setActualCountry(id);
  };

  const handleCardMouseLeave = () => {
    setActualCountry(null);
  };

  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      onMouseOver={handleCardMouseOver}
      onMouseLeave={handleCardMouseLeave}
    >
      <img className="rounded-t-lg w-full h-36" src={data.flags.png} alt="" />

      <div
        className={` ${
          actualCountry === id
            ? "visible p-5 pointer mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white infos"
            : "hidden-0 infosHidden"
        }`}
      >
        <h5 className="text-center">{data.name.common}</h5>
      </div>
    </div>
  );
};

export default CountryCard;
