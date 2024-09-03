import React from "react";
import { questions } from "../utils/questions";

const getRandomQuestion = () => {
  const questionID = Math.floor(Math.random() * questions.length);
  return questions[questionID];
};

console.log(getRandomQuestion());
const Time = () => {
  return <div>Time</div>;
};

export default Time;
