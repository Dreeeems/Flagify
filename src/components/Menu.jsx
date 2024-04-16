import React, { useState } from "react";
import webIcon from "../assets/icon.png";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-screen">
      {/* Desktop version of the menu*/}
      <div className="w-full h-28 bg-slate-950 hidden md:block">
        <div className="flex row p-4 gap-8 w-full items-center">
          <a href="/">
            <img src={webIcon} alt="" />
          </a>
          <p className="text-white">
            <Link to="/discover">Explore</Link>
          </p>
          <p className="text-white">
            <Link to="/comparator"> Comparator</Link>
          </p>

          <p className="text-white">Comparator</p>
          <p className="text-white">Comparator</p>
        </div>
      </div>
      {/* Mobile version*/}
      <div className="block md:hidden z-50">
        <div className="flex justify-between items-center p-4 border-b-2 border-b-slate-200 z-40 bg-slate-950 relative">
          <a href="/">
            <Link to="/">
              <img src={webIcon} alt="Web Icon" className="h-8 w-auto" />
            </Link>
          </a>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm18 6H3v2h18v-2z"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div
            className={`transition-height ease-in-out duration-500 opening z-1 ${
              isOpen ? "h-auto" : "h-0"
            }`}
          >
            <div className="bg-slate-950 p-4 border-b-2 border-b-slate-200 ">
              <p className="text-white">
                <Link to="/discover">Explore </Link>
              </p>

              <p className="text-white">Comparator</p>

              <p className="text-white">Comparator</p>

              <p className="text-white">Comparator</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
