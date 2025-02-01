/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      "purple-dark": "#59517a",
      "purple-semi-dark": "#353540",
      "purple-semi-clean": "#b7addb",
      "purple-very-clean": "#eddbff",
      "white": "#e0e0e0",
      "dark": "#1e1f29",
      "black": "#1F2937",
      "green": "#4cae4f",
      "blue": "#0A66C2"
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"]
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
        "3xl": "1.5rem",
        "2xl": "1rem",
      }
    },
  },
  plugins: [],
}