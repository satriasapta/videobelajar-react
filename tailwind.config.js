/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      size: {
        '18': '4.5rem',
      },
      colors: {
        'background': '#fffcf4'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      }
    },
    plugins: [],
  }
}
