/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primaryBg: "#1D1E22",
        secondaryBg: "#292B32",
      },
      colors: {
        primaryBg: "#1D1E22",
        secondaryBg: "#292B32",
        primary: "#E4E4E4",
        secondary: "#8C8C8C",
        // accent: "#FF6B6B",
        highlight: "#59A5D8",
        neutral: "#646464",
      },
      fontFamily: {
        fredoka: ["Fredoka,sans-serif"],
      },
    },
  },
  plugins: [],
};
