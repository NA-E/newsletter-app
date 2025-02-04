/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <-- Adjust to match your folder structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require("@tailwindcss/line-clamp"), // <-- Uncomment if using line-clamp classes
  ],
};