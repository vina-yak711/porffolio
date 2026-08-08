/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "var(--text-primary, #f8fafc)",
        secondary: "var(--text-secondary, #cbd5e1)",
        tertiary: "var(--bg-tertiary, #151030)",
        "bg-primary": "var(--bg-primary, #050816)",
        "bg-secondary": "var(--bg-secondary, #090d22)",
        "black-100": "var(--bg-card, #100d25)",
        "black-200": "var(--bg-card-alt, #1a1440)",
        "white-100": "var(--text-primary, #f8fafc)",
        accent: "var(--accent-color, #915EFF)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(33, 30, 53, 0.4)",
        "card-light": "0px 10px 30px -5px rgba(0, 0, 0, 0.08)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
