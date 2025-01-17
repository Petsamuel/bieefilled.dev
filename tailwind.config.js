/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        brand: "#43ffa1",
      },
      fontFamily: {
        michroma: "Michroma",
        roboto: "Roboto",
        dmSan: "DM Sans",
        leagueSpartan: "League Spartan",
      },
    },
  },
  plugins: [],
};
