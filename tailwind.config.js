/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#96CD32",
        secondary: "#1423DC",
        white: "#FDFDFD",
        gray: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
