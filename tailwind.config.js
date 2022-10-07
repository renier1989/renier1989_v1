/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class', 
  content: ["./index.{html,js}"],
  theme: {
    extend: {
      textColor : {
        'primary' : '#CC2D4A',
        'secondary' : '#8FA206',
        'terciary' : '#61AEC9',
      },
      fontFamily : {
        'Montserrat' : ['Montserrat', 'san-serif']
      }
    },
  },
  plugins: [],
}
