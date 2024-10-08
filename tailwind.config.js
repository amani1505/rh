const colors = require("tailwindcss/colors");

module.exports = {
  prefix: "",
  mode: "jit",
  important: false,
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xxs: "480px",
        xs: "570px",
      },
      fontSize: {
        xxs: "var( --fs-11)",
        xs: "var( --fs-10)",
        sm: "var( --fs-9)",
        xxm: "var( --fs-8)",
        xm: "var( --fs-7)",
        md: "var(--fs-6)",
        base: "var(--fs-5)",
        lg: "var( --fs-4)",
        xl: "var( --fs-3)",
        xxl: "var( --fs-2)",
        "2xl": "var( --fs-1)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "fade-in-down": "fade-in-down 0.3s ease-out",
        "fade-out-down": "fade-out-down 0.3s ease-out",
        "fade-in-up": "fade-in-up 0.3s ease-out",
        "fade-out-up": "fade-out-up 0.3s ease-out",
        slideDown: "slideDown 1s ease-in-out",
        slideUp: "slideUp 1s ease-in-out",
        slideLeft: "slideLeft 0.5s ease-in-out",
        slideRight: "slideRight 0.5s ease-in-out",
      },
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
      },
      boxShadow: {
        custom: "0px 0px 50px 0px rgb(82 63 105 / 15%)",
      },
      colors: {
        primary: colors.pink,
        secondary: colors.green,
        night: {
          50: "rgba(229, 231, 235, 1)",
          100: "rgba(209, 213, 219, 1)",
          200: "rgba(156, 163, 175, 1)",
          300: "rgba(107, 114, 128, 1)",
          400: "rgba(75, 85, 99, 1)",
          500: "rgba(55, 65, 81, 1)",
          600: "rgba(44, 55, 75, 1)",
          700: "rgba(31, 41, 55, 1)",
          800: "rgba(17, 24, 39, 1)",
          900: "rgba(10, 13, 20, 1)",
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins", "system-ui", "sans-serif"],
      nunito: ["Nunito Sans", "sans-serif"],
      raleway: ["Raleway"],
      varela: ["Varela Round", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  variants: {
    extend: {},
    scrollbar: ["dark", "rounded"],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar"),
  ],
};
