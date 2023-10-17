/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'modal-transparent': 'rgba(255, 255, 255, 0.4)',
        'input-blank': 'rgba(147, 155, 159, 0.3)',
        keyboard: 'rgba(147, 155, 159, 0.1)',
        keys: 'rgba(211, 214, 218, 0.4)'
      },
    },
  },
  plugins: [],
}