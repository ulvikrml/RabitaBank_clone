/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cardBg: {
          300: '#F1F4EE',
          800: '#000000'
        }
      },
      spacing: {
        '1/7': '15%',
      },
      fontSize: {
        '2.5xl': '1.700rem',
      }
    },
  },
  plugins: [],
}
