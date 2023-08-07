/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{html,js,jsx}',
    ,
  ],
  theme: {
    fontFamily: { sans: ['Lato', 'sans-serif'] },

    extend: {
      colors: {
        primaryBlue: '#386DF4',
        secondaryBlue: '#111E96',
        tertiaryBlue: '#E3EEFA',
        positive: '#49BF55',
        warning: '#E53F3F',
        gray10: '#E6E6E6',
        gray40: '#999999',
        gray75: '#404040',
      },
    },
  },
  plugins: [],
};
