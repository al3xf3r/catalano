import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#c9a84c",
          DEFAULT: "#b8902a",
          dark: "#8a6a1a",
          champagne: "#d4af6e",
          pale: "#f0dfa0",
        },
        ivory: "#f5f0e8",
        cream: "#ede7d9",
        charcoal: "#1a1a1a",
        noir: "#0d0d0d",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.25em",
        wide: "0.15em",
      },
      animation: {
        "float-slow": "floatSlow 20s ease-in-out infinite",
        "float-slower": "floatSlow 28s ease-in-out infinite reverse",
        "scroll-brands": "scrollBrands 30s linear infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(12px, -18px) rotate(3deg)" },
          "50%": { transform: "translate(-8px, -30px) rotate(-2deg)" },
          "75%": { transform: "translate(16px, -12px) rotate(2deg)" },
        },
        scrollBrands: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
