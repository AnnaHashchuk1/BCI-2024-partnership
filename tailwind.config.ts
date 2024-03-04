import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "hack-green": "#3BAF0B",
        "hack-gray": "#426466",
        "hack-light-green": "#B4FF95",
      },
    },
  },
} satisfies Config;

export default config;