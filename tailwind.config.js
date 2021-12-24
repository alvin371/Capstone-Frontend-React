module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html'
  ],
  darkMode: false,
  theme: {
    // extend: {},
    aspectRatio: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'soft-red': '#a53435',
      'white': '#ffffff',
      'black': '#000000',
      'red': '#e60000',
      'red-dark': '#760000',
      'gray-dark': '#686565',
      'gray': '#c4c4c4',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      'roboto': ['Roboto']
    },
    extend: {},

  },
  variants: {
    aspectRatio: ['responsive', 'hover']
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),

  ],
}
