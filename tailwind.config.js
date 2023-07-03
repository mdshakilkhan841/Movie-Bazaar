/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '--black': '#04152d',
        '--black2': '#041226',
        '--black3': '#020c1b',
        '--black-lighter': '#1c4b91',
        '--black-light': '#173d77',
        '--pink': '#FF00CC',
        '--orange': '#f89e00',
        '--gradient': 'linear-gradient(98.37deg, #FF00CC 0.99%, #333399 100%)',
      }
    },
  },
  plugins: [],
}