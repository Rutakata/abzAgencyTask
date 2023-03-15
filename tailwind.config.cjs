/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'yellow': '#f4e041',
      'blue': '00bdd3',
      'light-gray': '#f8f8f8',
      'disabled': '#b4b4b4',
      'white': '#ffffff',
      'error': '#E52D2D'
    },
    extend: {
      spacing: {
        '60': '3.75rem'
      },
      backgroundImage: {
        'banner': "url('/assets/banner.jpeg')"
      }
    },
    fontFamily: {
      'normal': ['Nunito', 'Georgia']
    },
    screens: {
      'sm': '360px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1520px'
    }
  },
  plugins: [],
}
