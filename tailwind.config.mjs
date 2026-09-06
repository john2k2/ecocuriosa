/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        jungle: {
          DEFAULT: '#063b1e',
          dark: '#052212',
          light: '#0e4b2a',
        },
        brass: {
          DEFAULT: '#946c07',
          light: '#c59b27',
          dark: '#785405',
        },
        fossil: {
          DEFAULT: '#fbf9f4',
          border: '#e6e2d8',
          parchment: '#f4efe4',
        },
        ink: {
          DEFAULT: '#141715',
          muted: '#5a605c',
        },
        biome: {
          fauna: '#92400e',
          ocean: '#0369a1',
          earth: '#047857',
          mineral: '#475569',
        },
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        earth: {
          50: '#fbfaf8',
          100: '#f5f2eb',
          200: '#e8e2d4',
          700: '#4a443b',
          800: '#332e27',
          900: '#211d18',
        }
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        full: '9999px',
      },
      fontFamily: {
        serif: ['Literata', 'Georgia', 'serif'],
        sans: ['Albert Sans', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
