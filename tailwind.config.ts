import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#6B85FF",
          foreground: "#FFFFFF",
          50: '#EEF1FF',
          100: '#D8E0FF',
          200: '#B3C0FF',
          300: '#8EA1FF',
          400: '#6B85FF',
          500: '#3D5EFF',
          600: '#0031FF',
          700: '#0026CC',
          800: '#001C99',
          900: '#001466',
        },
        secondary: {
          DEFAULT: "#ADADAD",
          foreground: "#333333",
          50: '#F7F7F7',
          100: '#EFEFEF',
          200: '#DCDCDC',
          300: '#BDBDBD',
          400: '#989898',
          500: '#7C7C7C',
          600: '#656565',
          700: '#525252',
          800: '#464646',
          900: '#3D3D3D',
        },
        weather: {
          sunny: {
            DEFAULT: "#FFB200",
            50: '#FFF3D9',
            100: '#FFE9B3',
            200: '#FFD980',
            300: '#FFC94D',
            400: '#FFB200',
            500: '#CC8F00',
            600: '#996B00',
            700: '#664700',
            800: '#332400',
            900: '#1A1200',
          },
          rainy: {
            DEFAULT: "#6B85FF",
            50: '#EEF1FF',
            100: '#D8E0FF',
            200: '#B3C0FF',
            300: '#8EA1FF',
            400: '#6B85FF',
            500: '#3D5EFF',
            600: '#0031FF',
            700: '#0026CC',
            800: '#001C99',
            900: '#001466',
          },
          cloudy: {
            DEFAULT: "#ADADAD",
            50: '#F7F7F7',
            100: '#EFEFEF',
            200: '#DCDCDC',
            300: '#BDBDBD',
            400: '#989898',
            500: '#7C7C7C',
            600: '#656565',
            700: '#525252',
            800: '#464646',
            900: '#3D3D3D',
          },
          snowy: {
            DEFAULT: "#E8F0FF",
            50: '#FFFFFF',
            100: '#FFFFFF',
            200: '#FFFFFF',
            300: '#FFFFFF',
            400: '#F6FAFF',
            500: '#E8F0FF',
            600: '#B0CFFF',
            700: '#78AEFF',
            800: '#408DFF',
            900: '#086CFF',
          },
        },
      },
      backgroundImage: {
        'weather-gradient': 'linear-gradient(to bottom, rgba(28, 28, 30, 0.8), rgba(28, 28, 30, 0.95))',
        'card-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-up": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
        "slide-up": "slide-up 0.4s ease-out",
        "slide-down": "slide-down 0.4s ease-out",
        "scale-up": "scale-up 0.3s ease-out",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
      },
      height: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      minHeight: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      scale: {
        '98': '.98',
        '102': '1.02',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addBase, theme }: any) {
      addBase({
        'html': {
          '@apply antialiased': {},
        },
        'button, a': {
          '@apply min-h-[44px] min-w-[44px] inline-flex items-center justify-center': {},
        },
      });
    },
  ],
} satisfies Config;