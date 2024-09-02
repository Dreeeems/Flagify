import React from "react";

const CountryBtn = (props) => {
  const { country } = props;
  console.log(country);

  return (
    <div className="flex flex-col  pt-5 pl-5 pr-5 mt-5 ">
      <div className="sm:w-44 sm:h-44 w-36 h-36 bg-bgborder rounded-full flex items-center justify-center ">
        <div className="sm:w-40 sm:h-36 w-32 h-32 bg-gray-500 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-btn text-white p-2  rounded-2xl text-center mt-5 font-bold pl-8 pr-8 mb-5 border-bgborder border-2">
        {country.name.common}
      </div>
    </div>
  );
};

export default CountryBtn;
