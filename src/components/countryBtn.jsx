import React, { useState } from "react";
import { useSelector } from "react-redux";

const CountryBtn = (props) => {
  const countries = useSelector((state) => state.country);
  const question = useSelector((state) => state.question);
  const { country } = props;

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [correctCountry, setCorrectCountry] = useState(null);

  const checkAnswer = (country) => {
    let correct = countries[0]; // Supposons que le premier pays est le bon
    // Logique pour déterminer le pays correct
    switch (question.questionId) {
      case 0:
        for (let i = 0; i < countries.length; i++) {
          if (correct.population < countries[i].population) {
            correct = countries[i];
          }
        }
        break;
    }

    setSelectedCountry(country);
    setCorrectCountry(correct);
    console.log(correct.name.common);
  };

  // Vérifie si la réponse est correcte
  const isCorrect =
    selectedCountry &&
    selectedCountry.name.common === correctCountry?.name.common;
  const isSelected =
    selectedCountry && selectedCountry.name.common === country.name.common;

  return (
    <div
      className="flex flex-col items-center mt-5 cursor-pointer"
      onClick={() => checkAnswer(country)}
    >
      <div
        className={`bg-btn text-white h-20  lg:w-96  sm:w-92 flex items-center justify-center rounded-xl text-center font-bold w-full transition duration-300 transform hover:scale-105 shadow-md ${
          selectedCountry
            ? isCorrect
              ? "bg-green-500"
              : isSelected
              ? "bg-red-500"
              : correctCountry.name.common == country.name.common
              ? "bg-green-500"
              : ""
            : ""
        }`}
      >
        {country.name.common}
      </div>
    </div>
  );
};

export default CountryBtn;
