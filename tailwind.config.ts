import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pryBlue: "#0B1D51",
        pryBlue2: "#0E0E52",
        secBlue: "#B7C0EE",
        tangerine: "#F28500",
        coolGray: "#8C92AC",
        cyanBlue: "#CCFBFE",
      },
    },
  },
  plugins: [],
} satisfies Config;
