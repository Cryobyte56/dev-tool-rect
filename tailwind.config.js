/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-up": "fadeUp 1s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)", // Start from bottom
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)", // End at normal position
          },
        },
      },
    },
  },
  plugins: [],
};
