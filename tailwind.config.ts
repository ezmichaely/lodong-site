import type { Config } from 'tailwindcss'

const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: 'url("/images/bg/bg_home.png")',
        hero: 'linear-gradient(to top, rgba(0,0,0,0.90) 30%, transparent 60%)',
      },
      backgroundPosition: {
        // center: {
        //   right: 'background-position: center right;'
        // }
      },
      fontFamily: {
        applesd: ['var(--font-applesd)'],
        inter: ['var(--font-inter)'],
        nanum: ['var(--font-nanum)'],
        kumbh: ['var(--font-kumbh)'],
        roboto_slab: ['var(--font-roboto_slab)'],
        jacques: ['var(--font-jacques)'],
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
      height: {
        header: '120px',
      },
      colors: {
        carmine: { //red
          light: '#FF6767', 
          DEFAULT: '#FD3A3A',
          dark: '#FA2B2B', 
        },
        jungle: { //dark
          DEFAULT: '#2B2A2A',
          100: '#CCCBCB',
          200: '#636464',
          300: '#404041',
          400: '#242424',
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
