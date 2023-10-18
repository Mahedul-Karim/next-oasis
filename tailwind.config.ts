import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-900": "#312e81",
      "primary-800": "#3730a3",
      "primary-700": "#4338ca",
      "primary-600": "#4f46e5",
      "primary-500": "#6366f1",
      "primary-200": "#c7d2fe",
      "primary-100": "#e0e7ff",
      "primary-50": "#eef2ff",

      "grey-0": "var(--color-grey-0)",
      "grey-50": "var(--color-grey-50)",
      "grey-100": "var(--color-grey-100)",
      "grey-200": "var(--color-grey-200)",
      "grey-300": "var(--color-grey-300)",
      "grey-400": "var(--color-grey-400)",
      "grey-500": "var(--color-grey-500)",
      "grey-600": "var(--color-grey-600)",
      "grey-700": "var(--color-grey-700)",
      "grey-800": "var(--color-grey-800)",
      "grey-900": "var(--color-grey-900)",
      "blue-100": "var(--color-blue-100)",
      "blue-700": "var(--color-blue-700)",
      "green-100": "var(--color-green-100)",
      "green-700": "var(--color-green-700)",
      "yellow-100": "var(--color-yellow-100)",
      "yellow-700": "var(--color-yellow-700)",
      "silver-100": "var(--color-silver-100)",
      "silver-700": "var(--color-silver-700)",
      "indigo-100": "var(--color-indigo-100)",
      "indigo-700": "var(--color-indigo-700)",
      "backdrop":"var(--backdrop-color)",
      "red-100": "var(--color-red-100)",
      "red-700": "var(--color-red-700)",
      "red-800": "var(--color-red-800)",
      "color-text":"var(--text-color)"
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      jp: ["Noto-Sans-JP", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "400px": "400px",
        "800px": "800px",
        "1000px": "1000px",
      },
    },
  },
  plugins: [],
};
export default config;
