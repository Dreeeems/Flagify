/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "80vh": "80vh",
      },
      colors: {
        bgr1: "#4a1d5b",
        bgr2: "#723081",
        bgborder: "#8a4c99",
        btn: "#584BA5",
      },
    },
  },
  plugins: [],
};
