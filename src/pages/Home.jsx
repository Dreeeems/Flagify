import React from "react";
import { useState, useEffect } from "react";
import fetchCountries from "../utils/fetchFromApi";
import HomeCountryCard from "../components/homeCountryCard";
const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const addCountry = (country) => {
    console.log(country);
    if (
      selectedCountries.length < 4 &&
      !selectedCountries.find((c) => c.cca3 === country.cca3)
    ) {
      setSelectedCountries([...selectedCountries, country]);
      setSearchTerm("");
      console.log(selectedCountries);
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
        setLoading(false);
      } catch (err) {
        console.error("Error", err);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = countries.filter(
        (country) =>
          country.name.common
            .toLowerCase()
            .includes(searchTerm.toLocaleLowerCase()) ||
          country.region.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filtered.slice(0, 10));
    } else {
      setFilteredCountries([]);
    }
  }, [searchTerm, countries]);

  const removeCountry = (countryCode) =>{
 setSelectedCountries(selectedCountries.filter((c) => c.cca3 !== countryCode));
  }
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
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for any country..."
          className="w-full pl-12 h-14 bg-white/10 backdrop-blur-lg border border-purple-500/30 text-white placeholder:text-purple-300 text-lg rounded-2xl focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-200"
        />
      </div>
      {filteredCountries.length > 0 && (
        <div className="max-w-lg mx-auto mt-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-purple-500/30 max-h-80 overflow-y-auto">
          {filteredCountries.map((country) => (
            <button
              key={country.cca3}
              onClick={() => addCountry(country)}
              className="w-full px-6 py-4 text-left hover:bg-purple-500/20 flex items-center gap-4 border-b border-purple-500/20 last:border-b-0 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                selectedCountries.length >= 4 ||
                selectedCountries.some((c) => c.cca3 === country.cca3)
              }
            >
              <img
                src={country.flags.png || "/placeholder.svg"}
                alt={`${country.name.common} flag`}
                className="w-8 h-6 object-cover rounded shadow-lg"
              />
              <div className="flex-1">
                <span className="font-semibold text-white text-lg">
                  {country.name.common}
                </span>
                <p className="text-purple-300 text-sm">{country.region}</p>
              </div>
            </button>
          ))}
        </div>
      )}
      {selectedCountries.length > 0 && (
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-lg rounded-full px-6 py-3 border border-purple-500/30">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            <p className="text-purple-200 font-medium">
              {selectedCountries.length} of 4 countries selected
            </p>
          </div>
        </div>
      )}

      {selectedCountries.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {selectedCountries.map((country) => (
            <HomeCountryCard
              key={country.cca3}
              country={country}
              onRemove={removeCountry}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Start Your Journey
          </h3>
          <p className="text-purple-300 text-lg max-w-md mx-auto">
            Search and select up to 4 countries to compare their fascinating
            statistics and data
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
