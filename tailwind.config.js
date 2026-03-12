/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#14532d',
          700: '#15803d',
          500: '#22c55e',
          300: '#86efac',
          100: '#dcfce7',
        },
        earth: {
          900: '#451a03',
          700: '#92400e',
          500: '#d97706',
          300: '#fcd34d',
          100: '#fef3c7',
        },
        sepia: {
          900: '#78350f',
          700: '#b45309',
          500: '#f59e0b',
          300: '#fbbf24',
          100: '#fef3c7',
        },
      },
      fontFamily: {
        heading: ['Merriweather', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
