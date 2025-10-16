/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softPink: "#fce7f3",
        softPurple: "#ede9fe",
        softBlue: "#dbeafe",
      },
    },
  },
  plugins: [],
};
