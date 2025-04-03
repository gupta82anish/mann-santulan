import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "colors": {
        "muted-green": "#8ba888",
        "light-muted-green": "#c4d3c2",
        "dark-muted-green": "#587455",
        "muted-purple": "#a587a8",
        "blueish-muted-green": "#87a894",
        "yellowish-muted-green": "#9aa887"
      }
    },
  },
  plugins: [],
} satisfies Config;
