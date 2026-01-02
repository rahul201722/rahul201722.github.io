/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#18181B',
        secondary: '#3F3F46',
        accent: '#2563EB',
        background: '#FAFAFA',
        text: '#09090B',
        border: '#E4E4E7',
        surface: '#FFFFFF',
        'surface-soft': '#F4F6FA',
      },
      fontFamily: {
        heading: ['"Crimson Pro"', 'serif'],
        body: ['"Atkinson Hyperlegible"', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms ease-out both',
        'fade-up-slow': 'fade-up 900ms ease-out both',
        'float-slow': 'float-slow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
