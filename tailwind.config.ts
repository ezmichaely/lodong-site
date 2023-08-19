/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        main: 'url("/images/bg/bg_home.png")',
        hero: 'linear-gradient(to top, rgba(0,0,0,0.90) 30%, transparent 60%)',
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
      colors: {carmine: { //red
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
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}