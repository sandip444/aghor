/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'lightGold': "#f6d98d",
        'darkGold': "#80652e",
        'dimGold': "rgba(133, 105, 45, 0.1)",
        'formBg': "#1c1f21",
        'lightText': "#676772"
      },

      screens: {

        'lg': '1280px',
        // => @media (min-width: 1280px) { ... }

        'xl': '1600px',
        // => @media (min-width: 1600px) { ... }

        '2xl': '1920px',
        // => @media (min-width: 1920px) { ... }

      },

      fontFamily: {
        'mono': 'Manrope',
      },
    },

  },
  plugins: [],
}
