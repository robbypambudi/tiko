const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Titania', ...fontFamily.sans],
        secondary: ['Montserrat', ...fontFamily.sans],
        tertiary: ['Inter', ...fontFamily.sans],
      },
    },
    plugins: [require('@tailwindcss/forms')],
  },
};
