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
    extend: {
      colors: {
        primary: "#001EBE",
        secondary: "#E2E2E2",
        "semi-grey": "#727272",
        "dark-grey": "#3A3A3A",
      },
      backgroundColor: {
        primary: "#001EBE",
        secondary: "#E2E2E2",
        background: "var(--background)",
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
