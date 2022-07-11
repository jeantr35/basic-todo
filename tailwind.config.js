/** @type {import('tailwindcss').Config} */
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
      'text-secondary': '#3B7EB4'
    },
    extend: {},
  },
  plugins: [],
}
