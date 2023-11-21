/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {"500":"#0076CE","700":"#1d4ed8"},
        secondary: {"500":"#3b82f6","700":"#1d4ed8"},
      }
    },
  },
  plugins: [],
}
