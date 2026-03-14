/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue-dark': '#0d47a1',
        'brand-blue-light': '#bbdefb',
        'brand-cyan': '#00bcd4',
        'brand-yellow': '#eaf149', // Added yellow from the user's mockup background
        'nimbus-bg': '#F9FAFB',
        'nimbus-blue': '#1956E2',
        'nimbus-alert-bg': '#FEF3C7',
        'nimbus-alert-text': '#92400E',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
