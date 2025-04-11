 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'meu-azul': '#1da1f2',
        'meu-verde': '#2ecc71',
        'mwu-cinza': '#bdc3c7',
      },
    },
  },
  plugins: [],
  }