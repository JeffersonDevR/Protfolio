/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#100d25",
        secondary: "#e9f1f7",
        tertiary: "#008bf8",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#e9f1f7",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #008bf8",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/MO123.png')",

      },
    },
  },
  plugins: [],
};