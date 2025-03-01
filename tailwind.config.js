/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primaryTitle:'#64b5f6',
        primaryContent:'#ffccbc',
        primarySubcontent:'#5dade2',
        primaryBase:'#4db6ac',
        primaryAccent:'#e57373',
        primaryBg:'#fcf3cf',
      }
    },
  },
  plugins: [],
}

