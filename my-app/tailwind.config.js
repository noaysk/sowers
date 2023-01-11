/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': [ "Noto Sans JP", 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        'title-green': '#6DBF6B',
        'font': '#053657',
        'blue': '#79D3F1',
        'pink': '#FCABB6',
        'green': '#70DA9D',
        'yellow': '#FCDC4A',


      },
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
};
