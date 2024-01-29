/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        clashDisplay: ['Clash Display', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors:{
        primaryColor: '#050729',
        secondaryColor: '#5313CA',
        paragraphColor:'#989AAE',
      }
    },
  },
  plugins: [],
}