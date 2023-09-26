/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      maxWidth: '2560px',
      width: 'screen'
    },
    extend: {
      screens: {
        'xs': '430px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      backgroundImage: {
        main: 'url("/images/bg/bg_home.png")',
        hero: 'linear-gradient(to top, rgba(0,0,0,0.90) 30%, transparent 60%)',
      },
      borderRadius: {
        '2.5xl': '20px',
        '70': '70px',
        '100': '100px',
        '130': '130px'
      },
      fontFamily: {
        applesd: ['var(--font-applesd)'],
        inter: ['var(--font-inter)'],
        nanum: ['var(--font-nanum)'],
        kumbh: ['var(--font-kumbh)'],
        roboto_slab: ['var(--font-roboto_slab)'],
        jacques: ['var(--font-jacques)'],
      },
      fontSize: {
        '13': '13px',
        '7.5xl': '84px',
        '9.5xl': '135px',
        '10xl': '140px',
      },
      lineHeight: {
        '0': '0px'
      },
      letterSpacing: {
        '01': '-0.1rem',
        '02': '-0.2rem'
      },
      height: {
        header: '120px',
        '540': '540px',
      },
      width: {
        header: '120px',
        '540': '540px',
      },
      margin: {
        '18': '72px',
        '520': '520px'
      },
      padding: {
        '18': '72px',
        '520': '520px'
      },
      boxShadow: {
        DEFAULT: '6px 7px 20px 1px rgba(43, 42, 42, 0.44)'
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
          500: '#282828',
        },
        purple: {
          '550': '#5764DC',
          '650': '#343C84',
        },
        keflavik: {
          DEFAULT: '#FFCF03',
          light: '#E8D265',
        },
        rugolf: {
          DEFAULT: '#084520',
          light: '#26A38B',
        },
        caremanager: {
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
        winlottery: {
          DEFAULT: '#2933D1',
          light: '#7565EA',
        },
      },
    },
  },
  plugins: [ ],
}
