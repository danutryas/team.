/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Lexend Deca"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "soft-blue": "#5468E7",
        "soft-violet": "#C897E4",
        "dark-blue": "#232340",
        "desaturated-blue": "#7676B2",
        "off-white": "#F5F5F5",
        "light-orange": "#FFBA79",
      },
      fontSize: {
        h1: ["50px", { lineHeight: "64px", fontWeight: "700" }],
        "h1-mobile": ["34px", { lineHeight: "42px", fontWeight: "700" }],
        h2: ["32px", { lineHeight: "40px", fontWeight: "400" }],
        h3: ["24px", { lineHeight: "36px", fontWeight: "400" }],
        h4: ["16px", { lineHeight: "26px", fontWeight: "700" }],
        p: ["18px", { lineHeight: "27px", fontWeight: "400" }],
        "p-mobile": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        caption: ["14px", { lineHeight: "23px", fontWeight: "400" }],
        "caption-mobile": ["12px", { lineHeight: "23px", fontWeight: "400" }],
        link: ["16px", { lineHeight: "24px", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};
export default config;
