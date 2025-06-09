/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        olive: {
          600: '#858553',
        }
      },
      fontFamily: {
        // Default font family
        sans: ['Poppins', 'Arial', 'sans-serif'],
        // Arabic font family
        arabic: ['Tajawal', 'Arial', 'sans-serif'],
      },
    }
  },
  plugins: [],
 }