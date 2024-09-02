import React from "react";
import GameController from "../components/gameController";
import Time from "../components/time";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-11">
      <Time />
      <GameController />
      {/**/}
    </div>
  );
};

export default HomePage;
