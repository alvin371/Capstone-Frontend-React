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
      5: '5',
      6: '6',
      7: '7',
      8: '8',
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
      'blue':'#89cff0',
      'blue-dark':'#0818A8',
      'green-jade':'#00A36C'
    },
    fontFamily: {
      'roboto': ['Roboto']
    },
    extend: {
      borderOpacity: {
        '10': '0.1',
        '20': '0.2',
        '95': '0.95',
       }
    },

  },
  variants: {
    aspectRatio: ['responsive', 'hover']
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),

  ],
}
