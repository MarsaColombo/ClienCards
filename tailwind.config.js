/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      portable: { max: "639px" },
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      
    },
    extend: {},
  },
  plugins: [],
};
