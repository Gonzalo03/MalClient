module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2196F3",
        secondary: "#536DFE",
        icon: "#BDBDBD",
        dark: "#1976D2",
        custom: {
          base: "#FFFFFF",
          first: "#212121",
          second: "#757575",
        },
      },
    },
    fontFamily: {
      yal: ["Yaldevi"],
      sch : ['Scheherazade New'],
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};
