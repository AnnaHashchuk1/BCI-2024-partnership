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
      backgroundImage: {
        'element': "url('/public/Statistics1.png')",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "bci-purple": "#945DBD",
        "bci-white": "#F0EFF0",
        "bci-gray": "#1E1E1E",
      },
    },
  },
} satisfies Config;

export default config;