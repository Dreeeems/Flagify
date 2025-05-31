import React from "react";
import {
  X,
  MapPin,
  Globe,
  Users,
  Ruler,
  DollarSign,
  Languages,
  BadgeInfo,
} from "lucide-react";

const HomeCountryCard = ({ country, onRemove }) => {
  const formatNumber = (num) => new Intl.NumberFormat().format(num);

  const getCurrency = (country) => {
    if (!country.currencies) return "N/A";
    const currency = Object.values(country.currencies)[0];
    return `${currency.name} (${currency.symbol})`;
  };

  const getLanguages = (country) => {
    if (!country.languages) return "N/A";
    return Object.values(country.languages).join(", ");
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300  rounded-2xl overflow-hidden">
      <div className="relative pb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6">
        <button
          onClick={() => onRemove(country.cca3)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500/40 border border-red-400/30 flex items-center justify-center transition-all duration-200 hover:scale-110 group"
          title={`Remove ${country.name.common}`}
        >
          <X className="w-4 h-4 text-red-300 group-hover:text-red-200" />
        </button>

        <div className="text-center">
          <div className="relative inline-block mb-4">
            <img
              src={country.flags.png || "/placeholder.svg"}
              alt={`${country.name.common} flag`}
              className="w-20 h-14 object-cover rounded-lg shadow-xl border-2 border-white/20"
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
              <BadgeInfo className="w-3 h-3 text-white" />
            </div>
          </div>
          <h3 className="text-xl text-white font-bold">
            {country.name.common}
          </h3>
          <p className="text-purple-300 text-sm mt-1">
            {country.name.official}
          </p>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
          <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-blue-300">Capital</p>
            <p className="text-white">{country.capital?.[0] || "N/A"}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-xl border border-green-500/20">
          <Globe className="w-5 h-5 text-green-400 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-green-300">Region</p>
            <p className="text-white">{country.region}</p>
            {country.subregion && (
              <p className="text-green-200 text-xs">{country.subregion}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
          <Users className="w-5 h-5 text-purple-400 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-purple-300">Population</p>
            <p className="text-white font-mono">
              {formatNumber(country.population)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-xl border border-orange-500/20">
          <Ruler className="w-5 h-5 text-orange-400 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-orange-300">Area</p>
            <p className="text-white font-mono">
              {formatNumber(country.area)} km²
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
          <DollarSign className="w-5 h-5 text-yellow-400 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-yellow-300">Currency</p>
            <p className="text-white text-sm">{getCurrency(country)}</p>
          </div>
        </div>

        <div className="p-3 bg-pink-500/10 rounded-xl border border-pink-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Languages className="w-5 h-5 text-pink-300" />
            <p className="text-sm font-semibold text-pink-300">Languages</p>
          </div>
          <p className="text-white text-sm">{getLanguages(country)}</p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {(country.population / 1000000).toFixed(1)}M people
          </span>
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {(country.area / 1000).toFixed(0)}K km²
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeCountryCard;
