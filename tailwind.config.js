/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1221',
          dark: '#070B14',
          light: '#1A233A',
        },
        secondary: {
          DEFAULT: '#D9B76A',
          dark: '#B8974D',
          light: '#E6CF9B',
        },
        background: '#FDFCFA',
        charcoal: '#2D3436',
        accent: '#D4AF37',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
