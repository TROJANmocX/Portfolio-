/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'Montserrat', 'ui-sans-serif', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      colors: {
        primary: {
          50: '#ffe6fa',
          100: '#ffb3ec',
          200: '#ff80df',
          300: '#ff4dd2',
          400: '#ff1ac6',
          500: '#e600ac', // Neon Pink
          600: '#b30085',
          700: '#80005e',
          800: '#4d0037',
          900: '#1a0010',
        },
        accent: {
          50: '#e6f7ff',
          100: '#b3e7ff',
          200: '#80d6ff',
          300: '#4dc6ff',
          400: '#1ab5ff',
          500: '#00e6fb', // Electric Blue
          600: '#00b3c2',
          700: '#00808a',
          800: '#004d51',
          900: '#001a19',
        },
        warning: {
          500: '#ffe600' // Bright Yellow
        },
        success: {
          500: '#39ff14' // Neon Green
        },
        error: {
          500: '#ff3131' // Neon Red
        },
        dark: {
          100: '#d1d5db',
          200: '#9ca3af',
          300: '#6b7280',
          400: '#4b5563',
          500: '#232946', // Deep Cyberpunk Navy
          600: '#121212', // Deep Black
          700: '#0a0a0a',
          800: '#050505',
          900: '#000000',
        },
        background: {
          DEFAULT: '#181322', // Cyberpunk dark background
          dark: '#0a0114',
        },
      },
      animation: {
        'terminal-cursor': 'blink 1s step-end infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      spacing: {
        '128': '32rem',
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.07l2.83-2.83 1.41 1.41L1.41 4.48H0V3.07zM17.76 38.59l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM17.76 20.83l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM17.76 3.07l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V3.07zM35.52 38.59l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM35.52 20.83l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM35.52 3.07l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V3.07z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'soft': '0 4px 24px 0 rgba(0,0,0,0.06)',
        'xl-soft': '0 8px 32px 0 rgba(0,0,0,0.10)',
      },
      transitionProperty: {
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};