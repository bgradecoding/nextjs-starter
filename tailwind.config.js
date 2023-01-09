//TODO 1. tailwindcss color define

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/app/**/*.{js,ts,jsx,tsx}",
    ".src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        50: "#e8f5e9",
        100: "#c8e6c9",
        200: "#a5d6a7",
        300: "#81c784",
        400: "#66bb6a",
      },
      secondary: {
        50: "#e8eaf6",
        100: "#c5cae9",
        200: "#9fa8da",
        300: "#7986cb",
        400: "#5c6bc0",
      },
    },
    extend: {},
  },
  plugins: [],
};
