module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fresh: '#F5F6E6',
        "fresh-dark": "#E1E4B6",
        vermillion: '#353956',
        sunshine: '#54668E',
        clean: '#E8E8E8',
        htmllogo: "#FE7A63",
        csslogo: "#1AA4E3",
        reactlogo: "#00D1F7",
        githublogo: "#072633",
        jslogo: "#89CF17"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
