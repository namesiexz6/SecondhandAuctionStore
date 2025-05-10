/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Arial', 'ui-sans-serif', 'system-ui'], // Inter, Roboto, Arial เหมาะกับ e-commerce และตัวเลข
      },
    },
  },
  plugins: [],
}