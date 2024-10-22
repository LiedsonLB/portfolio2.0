import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/partials/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'clamp': 'clamp(15px, 4vw + 0.2rem, 40px)',
      },
      colors: {
        'blue': '#004E98',
        'blue-light': '#CFDEF3',
        'white': '#FFFFFF',
        'ice': '#f5f5f5',
        'black': 'rgb(27, 31, 43)',
        'text-light': "#6b7280",
        'gray': '#404040',
        'brown-light': 'rgb(174, 162, 140)'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        noto: ['Noto Sans Display', 'sans-serif'],
        doppio: ['Doppio One', 'sans-serif'],
      },
      screens: {
        'md-lg': '800px',
        'sm-lg': '500px',
        'h-sm': {'raw': '(max-height: 600px)'}
      },
    },
  },
  plugins: [],
};
export default config;
