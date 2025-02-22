import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        unbounded: "var(--font-unbounded)",
        inter: "var(--font-inter)",
      },
      colors: {
        light: "#f1f1f1",
        dark: "#101010",
      },
      animation: {
        rotate: "rotate 10s linear infinite",
        float: "float 5s ease-in-out infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(-20px) rotate(0deg)",
            opacity: "1",
          },
          "50%": {
            transform: "translateY(20px) rotate(5deg)",
            opacity: "0.65",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
