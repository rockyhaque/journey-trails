/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A1EEBD",
        secondary: "#F6D6D6",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/footer-bg.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
