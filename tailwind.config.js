/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      "2xs": "480px",
      sm: "640px",
      "2sm": "770px",
      md: "768px",
      "2md": "806px",
      "3md": "982px",
      lg: "1024px",
      "2lg": "1168px",
      "3lg": "1228px",
      "4lg": "1248px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    extend: {
      fontFamily: {
        robotic: ["Roboto", "sans-serif"],
        poppins: ["Poppins"],
        petrona: ["Petrona"],
      },
      animation: {
        "normal-animation": "normalAnimate 1s ease-in-out forwards",
      },
      keyframes: {
        normalAnimate: {
          "0%": { transform: "translateY(200px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
