/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': [ "Noto Sans JP", 'Arial', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'join-green': "url('/src/img/green.png')",
        'm-join-green': "url('/src/img/m-green.png')",

      },
      colors: {
        "font-color": "#053657",
        "light-white": "rgba(255,255,255,0.17)",
        'title-green': '#6DBF6B',
        'font': '#053657',
        'blue': '#79D3F1',
        'pink': '#FCABB6',
        'green': '#70DA9D',
        'yellow': '#FCDC4A',
        'orange': '#F9B963',
        'purple': '#9A70D5',
      },
      height: {
        '104': '28rem',
        '128': '32rem',
      },
      width: {
        '128': '32rem',
        '152': '48rem',
      }, 
    },
  },
  plugins: [],
};
