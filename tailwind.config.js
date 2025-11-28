/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 enables dark mode via class="dark"
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./data/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
