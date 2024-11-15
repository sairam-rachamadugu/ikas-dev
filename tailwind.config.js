/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3D52A0',
        'primary-hover': '#7091E6'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
})

