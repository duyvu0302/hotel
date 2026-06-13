import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // White + Gold luxury palette for Sen Vàng (Golden Lotus)
        cream: "#FAF8F3",
        ink: "#1A1A1A",
        gold: {
          DEFAULT: "#C5A55C",
          light: "#D9C28A",
          dark: "#A9883F",
        },
        muted: "#6B6B6B",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(26, 26, 26, 0.12)",
        card: "0 20px 50px -20px rgba(26, 26, 26, 0.18)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 1.2s ease-out both",
        "slow-zoom": "slow-zoom 20s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
