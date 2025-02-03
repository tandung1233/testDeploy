import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./client/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "640px",
          sm: "768px",
          md: "1024px",
          lg: "1160px",
          xl: "1160px", // 1536px
        },
      },
      colors: {
        red: {
          "50": " #FEF6F6",
          "100": "#FCE4E3",
          "200": "#F8C0BE",
          "300": "#F7B7B1",
          "400": "#DD4A38",
          "500": "#ED5050",
          "600": "#ED1C24",
          "700": "#DE171B",
          "800": "#BD1419",
          "900": "#9D1016",
        },

        blue: {
          "50": " #F6F7F9",
          "100": "#F5F4F9",
          "200": "#EEEDF2",
          "300": "#E5E4EB",
          "400": "#A2A8BF",
          "500": "#8A92AE",
          "600": "#717A99",
          "700": "#335397",
          "800": "#16265E",
          "900": "#132152",
        },

        gray: {
          "50": "#FBFBFB",
          "100": "#EBEBEC",
          "200": "#CBCBCF",
          "300": "#908DA4",
          "400": "#8D8C94",
          "500": "#6F6D75",
          "600": "#5B5960",
          "700": "#47464B",
          "800": "#333236",
          "900": "#1F1E21",
        },

        yellow: {
          "50": "#FFFEF6",
          "100": "#FFFAE1",
          "200": "#FFFADF",
          "300": "#FEF8D0",
          "400": "#FEF5C1",
          "500": "#FEF1B2",
          "600": "#FDE680",
          "700": "#FDDA4D",
          "800": "#FCCD1B",
          "900": "#D6B002",
        },

        green: {
          "50": "#E3FFFE",
          "100": "#EDF8FA",
          "200": "#E2F4F6",
          "300": "#D6F1F3",
          "400": "#CAEFEF",
          "500": "#BEECEB",
          "600": "#93DFDA",
          "700": "#67D3C7",
          "800": "#11A6A1",
          "900": "#189000",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
