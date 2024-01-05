/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const { createThemes } = require("tw-colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  darkMode: "class",
  plugins: [
    nextui(),
    createThemes({
      light: {
        background: "#f9f9f9",
        roshi: {
          100: "#2E7D32",
          60: "#2E7D328F",
          10: "#2E7D321F",
        },
        whis: {
          100: "#3448F0",
          60: "#3448F08F",
          10: "#3448F01F",
        },
        frieza: {
          100: "#5C33CF",
          60: "#5C33CF8F",
          10: "#5C33CF1F",
        },
        nappa: {
          100: "#725550",
          60: "#7255508F",
          10: "#7255501F",
        },
        cell: {
          100: "#95F1D5",
          60: "#95F1D58F",
          10: "#95F1D58F",
        },
        raditz: {
          100: "#B3804A",
          60: "#B3804A8F",
          10: "#B3804A1F",
        },
        dodoria: {
          100: "#D33030",
          60: "#D330308F",
          10: "#D330301F",
        },
        krillin: {
          100: "#FFB319",
          60: "#FFB3198F",
          10: "#FFB3191F",
        },
        chichi: {
          100: "#FF4E64",
          60: "#FF4E648F",
          10: "#FF4E641F",
        },
        gohan: "#FFFFFF",
        trunks: "#595D62",
        background: "#ffffff",
      },

      dark: {
        background: "#000000",
        roshi: {
          100: "#1A5F26",
          60: "#1A5F2680",
          10: "#1A5F2626",
        },
        whis: {
          100: "#1D2FAB",
          60: "#1D2FAB4D",
          10: "#1D2FAB0F",
        },
        frieza: {
          100: "#342199",
          60: "#3421994D",
          10: "#3421991A",
        },
        nappa: {
          100: "#3D393D",
          60: "#3D393D80",
          10: "#3D393D26",
        },
        cell: {
          100: "#4DCCBA",
          60: "#4DCCBA80",
          10: "#4DCCBA80",
        },
        raditz: {
          100: "#5A2D15",
          60: "#5A2D1580",
          10: "#5A2D151A",
        },
        dodoria: {
          100: "#6B0E0E",
          60: "#6B0E0E80",
          10: "#6B0E0E26",
        },
        krillin: {
          100: "#BF7C0D",
          60: "#BF7C0D80",
          10: "#BF7C0D1A",
        },
        chichi: {
          100: "#BF303C",
          60: "#BF303C80",
          10: "#BF303C1A",
        },
        gohan: "#000000",
        trunks: "#343639",
      },
    }),
  ],
};
