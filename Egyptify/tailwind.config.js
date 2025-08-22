/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // You can add custom dark mode colors here if needed
        dark: {
          bg: '#1a1a1a',
          surface: '#2d2d2d',
          text: '#ffffff',
          muted: '#a1a1aa',
        }
      }
    },
  },
  plugins: [],
}

