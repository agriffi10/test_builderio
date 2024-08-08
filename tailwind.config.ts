import type { Config } from "tailwindcss";
import daisyui from 'daisyui';
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#2f4858',
          secondary: '#B0C0BC',
          accent: '#1282A2',
          neutral: '#fefcfb',
          'base-100': '#FFFFFF',
          info: '#006494',
          success: '#5A9367',
          warning: '#FFC145',
          error: '#D7263D',
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;
