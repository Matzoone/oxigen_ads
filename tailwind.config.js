/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazir", "sans-serif"],
        spacing: {
          "word-wide": "1.5em",
          "word-wider": "1em",
        },
      },
    },
    plugins: [],
  },
};
