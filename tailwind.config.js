module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#191919",
        },
        accent: {
          DEFAULT: "#0A68C8",
        },
        tertiary: {
          DEFAULT: "#F6B300",
        },
        gray: {
          DEFAULT: "#9E9E9E",
        },
        bgWhite: {
          DEFAULT: "#F1F1F1",
          blue: "#EFF6FD",
          gray: "#F0F2F7"
        },
        footer: {
          DEFAULT: "#55565c",
        },
        btn: {
          DEFAULT: "#1E7BDA",
          gray: "#BDBDBD"
        },
        number: {
          DEFAULT: "#DAE8F7",
        }
      },
      boxShadow: {
        'card': '10px 5px 30px 20px #E0E0E0',
        'cardMob': '10px 5px 30px 20px #F1F1F1',
        'cardKinds': '1px 1px 25px 4px #E6E6E6',
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    letterSpacing: {
      wider: '.06em',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
