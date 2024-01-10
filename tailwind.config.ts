import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: "#f8c291"
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5f9dee",
          secondary: "#34495e",
          accent: "#f8c291",
          neutral: "#ffffff",
          "base-100": "#f3f4f6",
          info: "#1abc9c",
          success: "#27ae60",
          warning: "#f1c40f",
          error: "#e74c3c",
        },
      },
    ],
  },
  plugins: [require("daisyui"),require('tailwind-scrollbar'),],
};
export default config;
