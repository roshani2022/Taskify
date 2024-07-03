/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nucha': ['Nucha', 'cursive'],
        'proxima': ['Proxima Nova', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}
