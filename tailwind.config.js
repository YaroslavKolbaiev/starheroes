/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sky': "url('/assets/sky.jpg')",
        'sky-sm': "url('/assets/sky-small.jpg')",
        'sky-md': "url('/assets/sky-medium.jpg')",
        'sky-mob': "url('/assets/sky-mobile.jpg')",
      }
    },
  },
  plugins: [],
}
