/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'coffee': {
          200: '#6c643d',
          400: '#c63b14',
          600: '#c63b144f',
          700: '#2c140d',
          800: '#6c210bad'
        }
      },
      keyframes: {
        slideDown: {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0)'}
        },
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
      },
      backgroundImage: {
        'slider-bg': `url(./imgs/banner.jpg)`,
      }
    },
  },
  plugins: [],
}

