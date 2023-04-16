/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:'480',
      md:'768px',
      lg:'976',
      xl:'1440'
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
