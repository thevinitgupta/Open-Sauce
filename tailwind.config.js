/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite'
      }
    },
    fontFamily : {
      logo : ['Architects Daughter', 'cursive'],
      body : ['Inter', 'sans-serif'],
      hero : ['Caveat', 'cursive'],
      head : ['Gruppo', 'cursive','sans-serif']
    }
  },
  plugins: [],
}
