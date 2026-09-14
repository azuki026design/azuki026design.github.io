/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E60012',
        dark: '#3E3232',
        gray: {
          500: '#707070',
          100: '#F5F5F5',
          200: '#F2F2F2',
        }
      },
      fontFamily: {
        sans: ['Meiryo', 'Noto Sans JP', 'sans-serif'],
      },
      maxWidth: {
        container: '62.5rem',
        narrow: '45rem',
      }
    },
  },
  plugins: [],
}