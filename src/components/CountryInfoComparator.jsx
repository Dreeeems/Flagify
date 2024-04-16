import React from "react";

const CountryInfoComparator = (props) => {
  const country = props.country;
  return (
    <div className="h-full w-full flex  flex-col">
      <div className="bg-white rounded-lg w-1/3 mt-3">
        <div className="p-4 text-black">
          <img src={country.flags.png} alt={country.name.common} />
          <h2 className="text-lg text-center mt-2 font-semibold">
            {country.name.common}
          </h2>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div className="bg-white rounded-lg w-1/3 mt-3">
          <div className="p-4 text-black">
            <h2 className="text-lg text-center mt-2 font-semibold">
              {country.name.common}
            </h2>
          </div>
        </div>
        <div className="bg-white rounded-lg w-1/3 mt-3">
          <div className="p-4 text-black">
            <img src={country.flags.png} alt={country.name.common} />
            <h2 className="text-lg text-center mt-2 font-semibold">
              {country.name.common}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfoComparator;
