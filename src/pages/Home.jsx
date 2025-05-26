import React from "react";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 pt-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Country Comparison Tool
        </h2>
        <p className="text-purple-200 text-lg max-w-2xl mx-auto">
          Discover and compare countries from around the world. Explore
          demographics, geography, and cultural insights.
        </p>
      </div>

      <div className="mb-12">
        <div className="relative max-w-lg mx-auto"></div>
        <input
          type="text"
          placeholder="Search for any country..."
          className="w-full pl-12 h-14 bg-white/10 backdrop-blur-lg border border-purple-500/30 text-white placeholder:text-purple-300 text-lg rounded-2xl focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default Home;
