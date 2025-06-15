/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#6366f1', // Indigo
        'primary-dark': '#4f46e5',
        'secondary': '#a855f7', // Purple
        'light': '#f3f4f6',
        'dark': '#1f2937',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'typing': 'typing 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        typing: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100%': { opacity: 0.2 },
        },
      },
      backgroundImage: {
        'cinema-pattern': "url('https://www.transparenttextures.com/patterns/movie-night.png')",
      },
    },
  },
  plugins: [],
}
