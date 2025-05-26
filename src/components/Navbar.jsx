import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black/20 backdrop-blur-lg border-b border-purple-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/">
            {" "}
            <h1 className="text-2xl font-bold text-white">🌍 Flagify</h1>
          </NavLink>

          <NavLink to="/game">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2">
              <span>🎮</span>
              Play Flag Game
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
