/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./index.js"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      tomato: "#ff6257",
      darkSlateGrey: "#242742",
      charcoalGrey: "#36384e",
      grey: "#9294a0",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
      },
      height: {
        imgMobile: "clamp(140px, -20px + 50vw, 180px)",
      },
    },
  },
  plugins: [],
};
