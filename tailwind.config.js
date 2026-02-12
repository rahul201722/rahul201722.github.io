/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#191614',
        secondary: '#5A534C',
        accent: '#0F766E',
        background: '#F7F2EA',
        text: '#141210',
        border: '#E4DDD1',
        surface: '#FFFBF4',
        'surface-soft': '#F2EDE4',
      },
      fontFamily: {
        heading: ['"Fraunces"', 'serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
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
