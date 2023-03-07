/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.pug", "./assets/js/main.js"],
  theme: {
    extend: {
      inset: {
        100: "100%",
      },
    },
  },
  plugins: [],
};
