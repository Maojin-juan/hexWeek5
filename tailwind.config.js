/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      backgroundImage: {},

      fontSize: {
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "700",
          },
        ],
      },

      colors: {
        "gray-100": "#F8F9FA",
        "gray-400": "#CED4DA",
        "gray-600": "#6C757D",
        "gray-900": "#212529",
        "green-600": "#1DA365",
        "green-700": "#198754",
        "green-900": "#147046",
      },

      fontFamily: {
        sans: ["Lato", "Roboto Mono", "sans-serif"],
        RobotoM: ["Roboto Mono"],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "14px",
          md: "2.25rem",
        },
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".scrollbar-hidden": {
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
