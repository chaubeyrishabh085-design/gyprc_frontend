// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'navbg1': 'rgb(7, 50, 70)',

      },
      textColor: {
        'navBlue': 'rgb(7, 50, 70)',
        'yellow1': '#BCAE33',
        'gradient-blue': 'linear-gradient(90deg, red, blue)',
      },
    },
  },
  plugins: [],
};


