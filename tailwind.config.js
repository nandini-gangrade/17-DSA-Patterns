/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Ensures dark mode is applied via class
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Custom primary color (adjust as needed)
        secondary: '#9333ea', // Custom secondary color (adjust as needed)
      },
    },
  },
  plugins: [],
};
