module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html'
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}
