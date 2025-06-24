/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {},
  plugins: [],
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.border-seablue': {
          borderColor: '#0b698b',
        },
        '.color-seablue': {
          color: '#0b698b',
        },
      });
    },
  ],
};