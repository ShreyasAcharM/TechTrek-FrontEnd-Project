/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x':'gradient-x 7s ease infinite',
    },
      padding:{
        '1/3':'33.33333%',
        '2/3':'66.66666',
      },
      keyframes:{
        fullSpin:{
          '100%':{
            transform:'rotate (-360)'
          }
        },
        'gradient-x': {
          '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          }
      },
      }
    },
  },
  plugins: [],
}



