/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      height: {
        dynamic: ["100vh", "100dvh"],
      },
      colors: {
        border: {
          1: "#C2C2C2",
        },
        typo: {
          main: "#434343",
          light: "#8E8E8E",
        },
        layer: {
          back: "#F6F3EF",
        },
        label: {
          blue: "rgba(35, 101, 228, 0.20)",
        },
      },
      keyframes: {
        label: {
          from: {
            backgroundSize: "0% 6px",
          },
          to: {
            backgroundSize: "100% 6px",
          },
        },
        "label-sm": {
          from: {
            backgroundSize: "0% 3px",
          },
          to: {
            backgroundSize: "100% 3px",
          },
        },
        fade: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fadein: "label 0.5s ease-in-out 0s forwards",
      },
    },
  },
  plugins: [],
};
