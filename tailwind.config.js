const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "448px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      borderWidth: {
        3: "3px",
      },
      colors: {
        gray: colors.warmGray,
        orange: colors.orange,
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Poppins", "Inter", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      rotate: {
        "-10": "-10deg",
      },
      skew: {
        "-8": "-8deg",
      },
      spacing: {
        "2px": "2px",
        18: "4.5rem",
        30: "7.5rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              h1: {
                fontFamily: `${theme("fontFamily.display")}`,
              },
              h2: {
                fontFamily: `${theme("fontFamily.display")}`,
              },
              h3: {
                fontFamily: `${theme("fontFamily.display")}`,
              },
              h4: {
                fontFamily: `${theme("fontFamily.display")}`,
              },
              h5: {
                fontFamily: `${theme("fontFamily.display")}`,
              },
              h6: {
                fontFamily: `${theme("fontFamily.display")}`,
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
