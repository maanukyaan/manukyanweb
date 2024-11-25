import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#f1f1f1",
        dark: "#101010",
      },
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        unbounded: ["var(--font-unbounded)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
