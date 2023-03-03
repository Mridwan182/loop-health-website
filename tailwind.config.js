/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      ssm: '688px',
      md: '768px',
      lg: '976px',
      mxl: '1024px',
      mmxl:'1280px',
      xl: '1440px',
      xxl: '1600px',
      '2xl': '1512px',
      '3xl':'1728px',
      '4xl': '2300px',
      '5xl': '2560px'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        green: {
          100: '#67BCB8'
        },
        darkblue: {
          100: '#27275D'
        },
        lightblue: {
          100: '#D3EAFE',
          200: '#F2F9FF',
          300: '#B0D7F9'
        },
        orange: {
          100: '#FFF1E7',
          200: '#FF9988'
        },
        purple: {
          100: '#E5F3FF',
          200: '#5F6FB1'
        },
        lightgreen:{
          100: '#E4F4F4',
          200: '#41BFB9'
        }
      },
    },
  },
  plugins: [],
};
