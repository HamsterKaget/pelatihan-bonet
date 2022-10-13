/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ["Poppins", "Sans-serif"]
    },
    extend: {
      colors: {
        'abu-abu': '#F3F3F3',
        'dongker': '#0C0D36',
        'ijo': '#3593BC',
      },
    },
  },
  plugins: [],
}
