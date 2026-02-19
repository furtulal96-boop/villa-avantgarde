module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Gilda Display",
      secondary: "Barlow",
      tertiary: "Barlow Condensed",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1140px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: {
          DEFAULT: "#4A90E2", // elegantna plava
          hover: "#357ABD", // tamnija nijansa za hover
        },
      },
      backgroundImage: {
        room: "url('/src/assets/img/room.jpg')",
        lapad: "url('/src/assets/img/lapad.jpg')",
        object: "url('/src/assets/img/rooms/object.jpg')",
      },
    },
  },
  plugins: [],
};
