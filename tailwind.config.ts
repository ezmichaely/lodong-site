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
        kumbh: ['var(--font-kumbh)'],
      },
      colors: {
        carmine: { //red
          light: '#FF6767', 
          DEFAULT: '#FD3A3A',
          dark: '#FA2B2B', 
        },
        jungle: { //dark
          DEFAULT: '#2B2A2A',
        },
        proj: {
          DEFAULT: '#282828',
          keflavik: {
            DEFAULT: '#FFCF03',
            light: '#E8D265',
          },
          rugolf: {
            DEFAULT: '#084520',
            light: '#26A38B',
          },
          wincare: {
            DEFAULT: '#0076B5',
            light: '#7790D0',
          },
          washcube: {
            DEFAULT: '#004D9E',
            light: '#004BB4',
          },
          aicity: {
            DEFAULT: '#F6EFE0',
            light: '#EBDAC6',
          },
          lottery: {
            DEFAULT: '#2933D1',
            light: '#7565EA',
          },
        }
      }
    },
  },
  plugins: [],
}
export default config
