/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#32305A',
      'secondary': '#44446A',
      'text-primary': '#FCFFF8',
      'text-secondary': '#3B7EB4',
      'category':'#7F7DA6',
      'sky': colors.sky,
      'cyan': colors.cyan,
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
