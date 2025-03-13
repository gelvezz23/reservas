/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
console.log("GGG", colors);
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: { ...colors },
    extend: {},
  },
  plugins: [],
};
