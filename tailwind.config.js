/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#fffdf9",
          100: "#fbf7f0",
          200: "#f2e8da",
        },
        olive: {
          700: "#4b573e",
          800: "#39452f",
          900: "#2f3828",
        },
        gold: {
          400: "#c8a35e",
          500: "#b58a3b",
          600: "#9e7330",
        },
        clay: {
          500: "#ad744e",
          600: "#95603f",
          700: "#784a32",
        },
      },
      fontFamily: {
          sans: ["Manrope", "sans-serif"],
          display: ["Cormorant Garamond", "serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(75, 52, 31, 0.10)",
        card: "0 14px 40px rgba(75, 52, 31, 0.08)",
      },
    },
  },
  plugins: [],
};
