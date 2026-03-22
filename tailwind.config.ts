import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
        warm: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
        },
        sage: {
          50: "#f4f7f4",
          100: "#e3ebe3",
          200: "#c8d7c8",
          300: "#a1bba1",
          400: "#759975",
          500: "#567b56",
          600: "#436243",
          700: "#374f37",
          800: "#2e402e",
          900: "#273527",
        },
        cream: {
          50: "#fefcfe",
          100: "#fdf8ff",
          200: "#faf0ff",
          300: "#f3e4fb",
          400: "#e8d0f0",
          500: "#d9b8e3",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"],
        display: ["Outfit", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
