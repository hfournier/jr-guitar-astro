/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,svg,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          to: {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
