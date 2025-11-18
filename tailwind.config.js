/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7A0026', // Deep Claret
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#7A0026', // Deep Claret
          600: '#6B0021',
          700: '#5C001C',
          800: '#4D0017',
          900: '#3E0012',
        },
        steel: {
          DEFAULT: '#A9A9A9', // Polished Steel
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#A9A9A9', // Polished Steel
          400: '#999999',
          500: '#888888',
        },
        charcoal: {
          DEFAULT: '#36454F', // Charcoal Grey
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#36454F', // Charcoal Grey
          400: '#2d3840',
          500: '#242b31',
        },
        offwhite: {
          DEFAULT: '#FAF9F6', // Warm Off-White
        },
      },
    },
  },
  plugins: [],
}

