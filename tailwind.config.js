/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#000000",

        adminOne: "#27374D",
        adminTwo: "#526D82",
        adminThree: "#9DB2BF",
        adminFour: "#DDE6ED",

        btnPrimaryHover: "#282828",
        btnSecondaryHover: "#000000",
      },
    },
  },
  plugins: [],
};
