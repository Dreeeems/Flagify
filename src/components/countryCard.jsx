import React from "react";

const CountryCard = (props) => {
  let data = props.country;
  //console.log(props.country.region)
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

  return (
    <div class="max-w-sm  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img class="rounded-lg w-28 h-28" src={data.flags.png} alt="" />
    </div>
  );
};

export default CountryCard;
