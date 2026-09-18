import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f7f3',
          100: '#e2ece3',
          200: '#c1d6c4',
          300: '#9dbba1',
          400: '#6f9d7a',
          500: '#4f7d5d',
          600: '#396245',
          700: '#2f4d38',
          800: '#243c2d',
          900: '#1b2c22'
        },
        slateWarm: '#f5f3ee'
      },
      boxShadow: {
        soft: '0 25px 50px -12px rgba(20, 30, 25, 0.12)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(55,65,81,0.12) 1px, transparent 0)'
      }
    }
  },
  plugins: []
} satisfies Config;
