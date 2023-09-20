/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        Popins: ["Poppins", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        button_color: "#E76F51",
        slider_bg_color: "rgba(231, 111, 81, 0.10)",
        star_color: "#E77C40",
      },
    },
  },
  plugins: [require("daisyui")],
};
