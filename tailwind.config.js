/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "hsl(var(--canvas) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        elevated: "hsl(var(--elevated) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        text: {
          primary: "hsl(var(--text-primary) / <alpha-value>)",
          secondary: "hsl(var(--text-secondary) / <alpha-value>)",
          tertiary: "hsl(var(--text-tertiary) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          strong: "hsl(var(--accent-strong) / <alpha-value>)",
          soft: "hsl(var(--accent-soft) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "Avenir Next", "Segoe UI", "sans-serif"],
        mono: ["IBM Plex Mono", "Cascadia Code", "ui-monospace", "monospace"],
      },
      boxShadow: {
        editorial: "0 16px 40px -24px hsl(var(--shadow) / 0.8)",
        glow: "0 0 0 1px hsl(var(--accent) / 0.24), 0 24px 60px -42px hsl(var(--accent) / 0.55)",
      },
      borderRadius: {
        editorial: "1.25rem",
      },
    },
  },
  plugins: [],
};
