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
        primary: "#4dd0e1",
        secondary: "#F6D6D6",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/footer-bg.jpg')",
        "login-pattern": "url('/assets/login-image.jpg')",
      },
      boxShadow: {
        "bottom-shadow": "0px 1px 2px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
