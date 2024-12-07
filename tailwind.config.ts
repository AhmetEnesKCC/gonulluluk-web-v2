import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "poppins",
      },
      spacing: {
        "page-padding": "120px",
      },
      colors: {
        background: "#FFFFFF",
        primary: "#F59642",
        secondary: "#DF1529",
        ternary: "#4C79B0",
        foreground: "#2B2B2B",
        "foreground-stat": "#5F678E",
        "foreground-header": "#4D4D4D",
        "stats-bg": "#BAB8BA",
        "section-bg": "#FE8921",
        "mission-bg": "#4C79B0",
        "support-bg": "#DF1529",
        "footer-bg": "#E6E6E6",
        divider: "#E6E6E6",
        "footer-title": "#474954",
      },
    },
  },
  plugins: [],
} satisfies Config;
