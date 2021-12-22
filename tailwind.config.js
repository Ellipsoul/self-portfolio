// const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  important: true, // Might be necessary to overwrite material design defaults
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    container: {
      padding: '2rem',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      scale: {
        101: '1.01',
      },
      transitionDuration: {
        50: '50ms',
      },
    },
  },
  variants: {},
  plugins: [],
};
