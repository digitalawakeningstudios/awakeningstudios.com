const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./_works/*.md",
    "./training/*.md",
    "./*.html",
    "./*.md",
  ],
  theme: {
    fontFamily: {
      mono: ["Share Tech Mono", ...defaultTheme.fontFamily.mono],
      sans: ["Lato", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: "0.75rem", // 12 px
      sm: "0.875rem", // 14 px
      base: "1rem", // 16 px
      lg: "1.3125rem", // 21 px
      xl: "1.75rem", // 28 px
      "2xl": "2.375rem", // 38 px
      "3xl": "3.1875rem", // 51 px
      "4xl": "4.1875rem", // 67 px
      "5xl": "5.375rem", // 86 px
    },
    extend: {
      boxShadow: {
        "inner-strong": "inset 0 0 50px 0px rgba(0, 0, 0, 0.6)",
      },
      colors: {
        accent: "#C0C019",
        indigo: {
          100: "#EBEBFF",
          200: "#C2C2FF",
          300: "#9C9CFF",
          400: "#8080F6",
          500: "#6464ED",
          600: "#5151E8",
          700: "#3939DE",
          750: "#3232B6",
          800: "#323290",
          900: "#30306B",
          950: "#161683",
        },
      },
      height: {
        14: "3.5rem",
      },
      opacity: {
        80: ".8",
        85: ".85",
        90: ".90",
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
  plugins: [],
};
