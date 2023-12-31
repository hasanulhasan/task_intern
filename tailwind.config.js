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
        gradient1: {"500":"#0076CE", "100":"#0076CE"},
        gradient2: {"500":"#9400D3"},
        deem: {"500":"#616161"},

      }
    },
  },
  plugins: [],
}
