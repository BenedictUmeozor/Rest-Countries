/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        darkModeElements: "hsl(209, 23%, 22%)",
        darkModeBg: "hsl(207, 26%, 17%)",
        darkModeText: "hsl(0, 0%, 100%)",
        lightModeText: "hsl(200, 15%, 8%)",
        lightModeInput: "hsl(0, 0%, 52%)",
        lightModeBg: "hsl(0, 0%, 98%)",
        lightModeElements: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        body: ["Nunito Sans"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
