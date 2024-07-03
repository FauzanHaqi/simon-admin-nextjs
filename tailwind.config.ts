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
      },
      spacing:{
        '18' : '4.5rem',
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};
export default config;
