import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'support-separator': '#33FFFFFF',
        'support-overlay' : '#52000000',
        'label-primary': '#FFFFFF',
        'label-secondary': '#99FFFFFF',
        'label-tertiary': '#66FFFFFF',
        'label-disable': '#26FFFFFF',
        'color-red': '#FF453A',
        'color-green': '#32D74B',
        'color-blue': '#0A84FF',
        'color-grey': '#8E8E93',
        'color-gray-light': '#48484A',
        'color-white': '#FFFFFF',
        'back-primary': '#161618',
        'back-secondary': '#252528',
        'back-elevated': '#3C3C3F',
      }
    },
  },
  plugins: [],
};
export default config;
