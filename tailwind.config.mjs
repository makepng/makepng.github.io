/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fbf9',
          100: '#d6f5f0',
          200: '#b0ece2',
          300: '#7de0d2',
          400: '#4ecdc0',
          500: '#26b0a1',
          600: '#1e9387',
          700: '#1c756d',
          800: '#1b5e58',
          900: '#1a4e4a',
          950: '#0a2e2c',
        },
      },
    },
  },
  plugins: [],
};
