import React, { useState } from "react";

import { useSelector } from "react-redux";

const Time = () => {
  const question = useSelector((state) => state.question);
  const countries = useSelector((state) => state.country);
  const [questionInf, setQuestionInf] = useState("");
  const [winner, setWinner] = useState(null);
  const result = () => {
    switch (question.questionId) {
      case 0:
        setWinner(
          Math.max(
            countries[0].population,
            countries[1].population,
            countries[2].population,
            countries[3].population
          )
        );
        break;
      case 1:
        const country = Math.random(1 * countries.length);
        setQuestionInf(country[country]);

        break;
      case 2:
        break;
      case 3:
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {question ? (
        <h2>Question: {question.question}</h2>
      ) : (
        <p>No question available</p>
      )}
    </div>
  );
};

export default Time;
