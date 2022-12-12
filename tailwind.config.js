const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5A189A',
      },
      fontFamily: {
        primary: ['Titania', ...fontFamily.sans],
        secondary: ['Montserrat', ...fontFamily.sans],
        tertiary: ['Inter', ...fontFamily.sans],
      },
    },
    plugins: [require('@tailwindcss/forms')],
  },
};
