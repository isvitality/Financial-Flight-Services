/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'brand-dark': '#4a4948',
        'brand-black': '#1a1a1a',
        'brand-gold': '#c7ae7e',
        'brand-gold-muted': '#a18a67',
        'brand-gold-light': '#e0cc9e',
        'brand-muted': '#6f6a5b',
      }
    },
  },
  plugins: [],
}