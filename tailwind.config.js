/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {

      'lg': {'max': '1440px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '960px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '576px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors:{
        primary:'#F3F3F3',
        secondary:'#169238'
      }
    },
  },
  plugins: [],
}
