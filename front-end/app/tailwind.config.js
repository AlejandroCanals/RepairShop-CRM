/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'content': '96rem',
        'contentHeight': '20rem',
        'tableHeight' : '40rem',
      },
      height: {
      }
    },
  },
  plugins: [],
}