/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        baskervville: ['"Baskervville SC"', "serif"],
        rufina: ['"Rufina"', "serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    // require("@tailwindcss/forms"),
  ],
};
