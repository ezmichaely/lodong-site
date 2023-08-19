import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        applesd: ['var(--font-applesd)'],
        inter: ['var(--font-inter)'],
        nanum: ['var(--font-nanum)'],
      },
      colors: {
        nRed: {
          light: '#FF6767', 
          DEFAULT: '#FD3A3A',
          dark: '#FA2B2B', //red
        },
        nGray: {
          DEFAULT: '#2B2A2A',
        },
        proj: {
          keflavik: '#FFCF03',
          rugolf: '#084520',
          wincare: '#0076B5',
          washcube: '#004D9E',
          aicity: '#F6EFE0',
          lottery: '#2933D1',
        }
      }
    },
  },
  plugins: [],
}
export default config
