/** @type {import('tailwindcss').Config} */
export default {
  // This line is essential for dark mode
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}