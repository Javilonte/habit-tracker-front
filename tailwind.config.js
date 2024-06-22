/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2",      // Responsabilidad
        secondary: "#50E3C2",    // Tranquilidad
        tech: "#9013FE",         // Tecnología
        background: "#F5F7FA",   // Fondo
        buttons: "#7ED321",      // Botones
      }

    },
  },
  plugins: [],
}

