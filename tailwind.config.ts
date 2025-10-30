import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1200px',
        },
      },
      colors: {
        neon: {
          blue: '#5ee7ff',
          purple: '#a78bfa',
          pink: '#ff6ad5',
          green: '#7ef9c6',
        },
      },
      boxShadow: {
        glow: '0 0 25px rgba(94, 231, 255, 0.35)',
      },
      backgroundImage: {
        'grid':
          'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} satisfies Config
