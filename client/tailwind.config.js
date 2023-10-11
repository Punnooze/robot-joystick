/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      //background: '#121212',
      background: '#1f1f1f',
      darkgrey: '#363535',
      darkergrey: '#4f4f4f',
      grey: '#707070',
      lightgrey: '#b7b8ba',
      violet: '#bb86fc',
      bluepurple: '#9081e5',
      lightpurple: '#383d82',
      teal: '#03dac6',
      white: '#ffffff',

      lightblue: '#58B6C3',
      darkblue: '#04122A',
      navbg: '#082546',
      banner: '#58C6D4',
      // grey: '#707070',
      // lightgrey: '#aba2a23f',
      // darkbg: '#1f2937',
    },
    extend: {},
  },
  plugins: [],
}
