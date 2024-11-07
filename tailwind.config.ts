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
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
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
        },
        secondary: {
          DEFAULT: "#ADADAD",
          foreground: "#333333",
        },
        weather: {
          sunny: "#FFB200",
          rainy: "#6B85FF",
          cloudy: "#ADADAD",
          snowy: "#E8F0FF",
        },
      },
      backgroundImage: {
        'weather-gradient': 'linear-gradient(to bottom, #F4F4F4, #FFFFFF)',
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
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
        "slide-up": "slide-up 0.4s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addBase, theme }: any) {
      addBase({
        // Optimize touch targets for mobile
        'button, a': {
          'min-height': '44px',
          'min-width': '44px',
          'display': 'inline-flex',
          'align-items': 'center',
          'justify-content': 'center',
        },
      });
    },
  ],
} satisfies Config;