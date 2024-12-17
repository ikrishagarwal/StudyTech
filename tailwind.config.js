/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          100: "#D2E6E4",
          600: "#0B7077",
        },
        orange: {
          500: "#f97316",
          600: "#ea580c",
        },
      },
    },
  },
  plugins: [],
};
