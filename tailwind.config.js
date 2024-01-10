/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat"'],
      },
      colors: {
          'gris' : '#F5F5F5',
          'rojo' : '#FF0000',
          'verde' : '#0BB039',
          'azul' : '#5090FE'
      },
    },
  },
  plugins: [],
}

