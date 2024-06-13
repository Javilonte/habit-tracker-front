/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      primary: "#799351",
      secondary: "#A1DD70",
      background: "#F6EEC9",
      buttons: "#EE4E4E",
      }

    },
  },
  plugins: [],
}

