import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        "border-spin": "border-spin 7s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
