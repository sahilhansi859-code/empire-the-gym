/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gym: {
          black: '#0a0a0a',
          dark: '#111111',
          card: '#1a1a1a',
          'card-hover': '#1f1f1f',
          border: '#2a2a2a',
          'border-strong': '#333333',
          red: '#e63946',
          'red-light': '#ff4d5a',
          'red-dark': '#c1121f',
          gold: '#f4a261',
          'gold-light': '#ffb87a',
          'gold-dark': '#d48848',
          white: '#ffffff',
          'white-soft': '#f5f5f5',
          gray: '#a3a3a3',
          'gray-dark': '#525252',
          'text-muted': '#a3a3a3',
        }
      },
      fontFamily: {
        heading: ['Bebas Neue', 'Oswald', 'sans-serif'],
        body: ['Inter', 'Poppins', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.8s ease-out forwards',
        'slide-left': 'slideLeft 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(230, 57, 70, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(230, 57, 70, 0.6)' }
        }
      }
    },
  },
  plugins: [],
}