/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '60': '#16DFE9',
          '40': '#45E5ED',
          '20': '#A2F2F6',
          '10': '#D0F9FB',
        },
        'secondary': {
          '100': "#0D0D59",
          '80': '#1919B3',
          '60': '#4C4CE6',
          '40': '#7979EC',
          '20': '#A6A6F2',
          '10': '#D2D2F9'
        },
        'accent': {
          'blue': "#050A73",
          'orange': '#F38345',
          'yellow': '#FDD231',
        },
        'black': {
          'title': "#2E2E2E",
          'body': '#808080',
          'field': '#CCCCCC',
          'disable': '#E6E6E6'
        }
      },
      container: {
        center: true,
      },
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        base: ['1rem', '24px'],
        xl: ['4.5rem', '96px'],
        '2xl': ['4rem', '88px'],
        '3xl': ['3rem', '63px'],
        '4xl': ['2rem', '48px'],
        '5xl': ['1.5rem', '48px'],
      }
    },
  },
  plugins: [],
}
