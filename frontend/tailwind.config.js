/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "node_modules/preline/dist/*.js",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "./containers/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [require("preline/plugin")],
  theme: {},
};
