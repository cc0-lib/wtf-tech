import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      supply: ["var(--font-supply)"],
      chakra: ["var(--font-chakra)"],
    },
    borderColor: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      "semi-grey": "var(--color-semi-grey)",
      "dark-grey": "var(--color-dark-grey)",
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "semi-grey": "var(--color-semi-grey)",
        "dark-grey": "var(--color-dark-grey)",
      },
      backgroundColor: {
        primary: "var(--color-primary)",
      },
    },
    keyframes: {
      "scroll-text": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(calc(-100% - 4rem))" },
      },
    },
    animation: {
      "scroll-text": "scroll-text 30s linear infinite",
    },
  },
  plugins: [],
};
export default config;
