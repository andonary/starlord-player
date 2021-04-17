const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        ...fontFamily,
        'sans': ['Roboto'],
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
