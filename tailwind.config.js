/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fuchsia: {
          400: '#ff71ce',
          700: '#c8008f',
        },
        turquoise: {
          400: '#01cdfe',
        },
        violet: {
          400: '#b967ff',
        },
        electric: {
          400: '#05f7ff',
        },
        yellow: {
          200: '#fffaa8',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1.5s infinite linear alternate',
        'neon-pulse': 'neon-pulse 2s infinite alternate',
      },
      keyframes: {
        glitch: {
          '0%': { textShadow: '2px 0 #ff71ce, -2px 0 #01cdfe' },
          '20%': { textShadow: '-2px 0 #b967ff, 2px 0 #01cdfe' },
          '40%': { textShadow: '2px 2px #ff71ce, -2px -2px #01cdfe' },
          '60%': { textShadow: '-2px 2px #b967ff, 2px -2px #01cdfe' },
          '80%': { textShadow: '2px 0 #ff71ce, -2px 0 #01cdfe' },
          '100%': { textShadow: '0 0 8px #ff71ce, 0 0 8px #01cdfe' },
        },
        'neon-pulse': {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px #ff71ce)' },
          '50%': { filter: 'drop-shadow(0 0 16px #01cdfe)' },
        },
      },
    },
  },
  plugins: [],
};
