/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jlt",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {}, 
  },
  plugins: [],
};
