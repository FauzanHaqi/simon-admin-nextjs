import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors:{
        'left-linear' : '#37A3FE',
        'right-linear' : '#2995F3',
        'white-66' : 'rgba(255, 255, 255, 0.66)',
        'white-60' : 'rgba(255, 255, 255, 0.60)'
      },
      spacing:{
        '18' : '4.5rem',
      },
      boxShadow:{
        'semua-sisi' : 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};
export default config;
