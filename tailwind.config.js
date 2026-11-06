/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          950: '#120A06',
          900: '#1C110C',
          850: '#231610',
          800: '#2B1B14',
          700: '#3D271D',
          600: '#523629',
          500: '#6C4837',
          400: '#8A5E48',
        },
        caramel: {
          900: '#5A3515',
          800: '#7A481C',
          700: '#995B25',
          600: '#A96B32',
          500: '#B8793E',
          400: '#C68B59',
          300: '#D9A779',
          200: '#ECD0B4',
          100: '#F7E9DC',
        },
        cream: {
          50: '#FCFAF7',
          100: '#F7F1E8',
          200: '#EFE6D8',
          300: '#E2D3BE',
          400: '#D0BC9F',
        },
        gold: {
          500: '#BFA075',
          400: '#C5A880',
          300: '#D4BA97',
          200: '#E5D1B8',
          100: '#F4EBDE',
        },
        burgundy: {
          900: '#481519',
          800: '#631E23',
          700: '#7A2E33',
          600: '#943B42',
          500: '#AC4A52',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.25em',
        'subtle': '0.08em',
        'wide-luxury': '0.35em',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'slow-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'ken-burns': 'kenburns 20s ease-in-out infinite alternate',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
          '100%': { opacity: '0.4' },
        }
      }
    },
  },
  plugins: [],
}
