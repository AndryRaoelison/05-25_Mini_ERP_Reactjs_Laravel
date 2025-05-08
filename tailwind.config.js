// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "var(--main-bg)",
        "soft-bg": "var(--soft-bg)",
        "dark-bg": "var(--dark-bg)",
        "main-color": "var(--main-color)",
        "soft-color": "var(--soft-color)",
        "coral-red": "var(--coral-red)",
        "dark-color": "var(--dark-color)",
        primary: "var(--primary)",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        palanquin: "var(--font-palanquin)",
      },
    },
  },
  plugins: [],
};
