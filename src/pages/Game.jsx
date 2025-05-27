import { React, useState, useEffect } from "react";

import fetchCountries from "../utils/fetchFromApi";

const Game = () => {
  const [countries, setCountries] = useState([]);
  const [currentFlag, setCurrentFlag] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [gameState, setGameState] = useState("playing");
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCountries();

        const validCountries = data.filter(
          (country) => country.flags && country.flags.png
        );
        setCountries(validCountries);
        setLoading(false);
      } catch (err) {
        console.error("Error", err);
        setLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (countries.length > 0) {
      generateQuestion();
    }
  }, [countries]);

  const generateQuestion = () => {
    if (countries.length < 4) return;

    setGameState("loading");
    setSelectedAnswer(null);

    const correctAnswer =
      countries[Math.floor(Math.random() * countries.length)];

    const wrongAnswers = [];
    while (wrongAnswers.length < 3) {
      const randomCountry =
        countries[Math.floor(Math.random() * countries.length)];
      if (
        randomCountry.cca3 !== correctAnswer.cca3 &&
        !wrongAnswers.find((c) => c.cca3 === randomCountry.cca3)
      ) {
        wrongAnswers.push(randomCountry);
      }
    }

    const allOptions = [correctAnswer, ...wrongAnswers].sort(
      () => Math.random() - 0.5
    );

    setCurrentFlag(correctAnswer);
    setOptions(allOptions);
    setGameState("playing");
  };

  const handleAnswer = (selectedCountry) => {
    setSelectedAnswer(selectedCountry);
    setTotalQuestions((prev) => prev + 1);

    if (selectedCountry.cca3 === currentFlag.cca3) {
      setScore((prev) => prev + 1);
      setStreak((prev) => {
        const newStreak = prev + 1;
        if (newStreak > bestStreak) {
          setBestStreak(newStreak);
        }
        return newStreak;
      });
      setGameState("correct");
    } else {
      setStreak(0);
      setGameState("wrong");
    }

    setTimeout(() => {
      generateQuestion();
    }, 2000);
  };

  const resetGame = () => {
    setScore(0);
    setTotalQuestions(0);
    setStreak(0);
    setSelectedAnswer(null);
    generateQuestion();
  };

  const getAccuracy = () => {
    return totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-purple-200 text-lg">Loading flag game...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto p-4 pt-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4 text-center">
            <p className="text-yellow-300 text-sm font-medium">Score</p>
            <p className="text-white text-2xl font-bold">{score}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4 text-center">
            <p className="text-blue-300 text-sm font-medium">Accuracy</p>
            <p className="text-white text-2xl font-bold">{getAccuracy()}%</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4 text-center">
            <p className="text-purple-300 text-sm font-medium">Streak</p>
            <p className="text-white text-2xl font-bold">{streak}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4 text-center">
            <p className="text-pink-300 text-sm font-medium">Best</p>
            <p className="text-white text-2xl font-bold">{bestStreak}</p>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Which country does this flag belong to?
          </h2>

          {currentFlag && (
            <div className="relative inline-block mb-8">
              <div className="relative">
                <img
                  src={currentFlag.flags.png || "/placeholder.svg"}
                  alt="Flag to guess"
                  className="w-48 h-32 md:w-64 md:h-40 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>

              {gameState === "correct" && (
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-white text-2xl">✓</span>
                </div>
              )}

              {gameState === "wrong" && (
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-white text-2xl">✗</span>
                </div>
              )}
            </div>
          )}

          {gameState === "correct" && (
            <div className="mb-6">
              <span className="bg-green-500 text-white text-lg px-6 py-2 rounded-full inline-block">
                🎉 Correct! That's {currentFlag?.name.common}!
              </span>
            </div>
          )}

          {gameState === "wrong" && (
            <div className="mb-6">
              <span className="bg-red-500 text-white text-lg px-6 py-2 rounded-full inline-block">
                ❌ Wrong! That was {currentFlag?.name.common}
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {options.map((country) => {
            let cardClass =
              "bg-white/10 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 cursor-pointer rounded-2xl";

            if (selectedAnswer) {
              if (country.cca3 === currentFlag?.cca3) {
                cardClass =
                  "bg-green-500/20 border-green-400 scale-105 rounded-2xl";
              } else if (country.cca3 === selectedAnswer.cca3) {
                cardClass =
                  "bg-red-500/20 border-red-400 scale-105 rounded-2xl";
              } else {
                cardClass =
                  "bg-white/5 border-gray-500/30 opacity-50 rounded-2xl";
              }
            }

            return (
              <div
                key={country.cca3}
                className={cardClass}
                onClick={() => gameState === "playing" && handleAnswer(country)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 text-left">
                      <h3 className="text-white text-xl font-bold">
                        {country.name.common}
                      </h3>
                      <p className="text-purple-300 text-sm">
                        {country.region}
                      </p>
                      {country.capital && (
                        <p className="text-purple-400 text-xs">
                          Capital: {country.capital[0]}
                        </p>
                      )}
                      {country.population && (
                        <p className="text-purple-400 text-xs">
                          Population: {formatNumber(country.population)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={resetGame}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <span>🔄</span>
            Reset Game
          </button>
        </div>

        {gameState === "loading" && (
          <div className="text-center mt-8">
            <div className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
