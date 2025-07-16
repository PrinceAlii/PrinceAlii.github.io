/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,md}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c1ff',
          300: '#66a1ff',
          400: '#3382ff',
          500: '#0062ff',   // anchor
          600: '#004ecc',
          700: '#003999',
          800: '#002566',
          900: '#001233'
        }
      },
      fontFamily: {
        monohead: ['Consolas', 'JetBrains Mono', 'Source Code Pro', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        body: ['Roboto', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};