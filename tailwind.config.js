/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik Iso', 'cursive'],
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
