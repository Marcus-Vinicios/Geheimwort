/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Baloo2, Inter, sans-serif",
        gameOver: "Anta, Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
