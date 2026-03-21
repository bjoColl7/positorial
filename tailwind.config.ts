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
          50: "#fef7ed",
          100: "#fdecd4",
          200: "#fad5a8",
          300: "#f6b871",
          400: "#f19038",
          500: "#ee7413",
          600: "#df5a09",
          700: "#b9420a",
          800: "#933510",
          900: "#772d10",
        },
        warm: {
          50: "#fdf8f3",
          100: "#faf0e4",
          200: "#f5dfc8",
          300: "#edc9a3",
          400: "#e3aa74",
          500: "#db924f",
          600: "#cd7b3d",
          700: "#ab6233",
          800: "#894f2f",
          900: "#6f4229",
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
          50: "#fefdfb",
          100: "#fdf9f3",
          200: "#faf3e7",
          300: "#f5e8d3",
          400: "#edd8b7",
          500: "#e3c495",
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
