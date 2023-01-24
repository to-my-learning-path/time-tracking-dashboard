/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "hsl(246, 80%, 60%)",
      lightRed: "hsl(15, 100%, 70%)",
      softBlue: "hsl(195, 74%, 62%)",
      lightRed: "hsl(348, 100%, 68%",
      limeGreen: "hsl(145, 58%, 55%)",
      violet: "hsl(264, 64%, 52%)",
      softOrange: "hsl(43, 84%, 65%",
      veryDarkBlue: "hsl(226, 43%, 10%)",
      darkBlue: "hsl(235, 46%, 20%)",
      desaturatedBlue: "hsl(235, 45%, 61%)",
      paleBlue: "hsl(236, 100%, 87%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
    },
    fontSize: {
      cardTitleFontSize: "18px",
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    fontWeight: {
      300: "300",
      400: "400",
      500: "500",
    },
    extend: {},
  },
  plugins: [],
};
