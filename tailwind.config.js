/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    {
      autoprefixer: {},
    },
  ],
  theme: {
    extend: {
      colors: {
        whiter: "#FAFAFA",
        baseWhite: "#F3F3F3",
        baseDark: "#41364A",
        accentPurple: "#9A63D1",
        lightAccentPurple: "#EACFFF",
        darkAccentPurple: "#684682",
        contrastOrange: "#FF7F57",
      },
      fontFamily: {
        mainFont: "var(--font-geist-sans)",
      },
    },
    darkMode: "class",
  },
};
