import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
        extend: {
                colors: {
                        brand: {
                                DEFAULT: '#6b8d3b',
                                light: '#8ab34d',
                                dark: '#4a6329',
                                lighter: '#a8c76e',
                                50: '#f4f7ed',
                                100: '#e5edd2',
                                200: '#c8db9d',
                                300: '#a8c76e',
                                400: '#8ab34d',
                                500: '#6b8d3b',
                                600: '#4a6329',
                                700: '#3a4d20',
                                800: '#2a3717',
                                900: '#1a210e',
                        }
                },
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                }
        }
  },
  plugins: [tailwindcssAnimate],
};
export default config;
