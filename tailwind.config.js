/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primary: {
          light: "#bbe1fa",
          DEFAULT: "#0d77bd",
          dark: "#084974",
        },
        screen: {
          light: "#283e39",
          dark: "#182624",
        },
        secondary: {
          light: "#2b403b",
          DEFAULT: "#bd530d",
          dark: "#743308",
        },
        dark: {
          one: "#172724",
          two: "#2a4742 ",
          three: "#58968b",
        },
        glass: {
          light: "#ffffff55",
          medium: "#ffffff77",
          heavy: "#ffffff99",
          dark: "#00000055",
        },
      },
      fontFamily: {
        prosto: ['"Prosto One"'],
        rubik: ["Rubik"],
      },
    },
  },
  plugins: [],
};
