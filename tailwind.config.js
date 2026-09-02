/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accentInk: "rgb(var(--accent-ink) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["clamp(3.5rem, 9vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        section: ["clamp(2.5rem, 5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        row: ["1.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        meta: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.06em" }],
      },
      maxWidth: {
        content: "1240px",
        measure: "60ch",
      },
      spacing: {
        rail: "180px",
      },
      borderRadius: {
        DEFAULT: "4px",
      },
      transitionDuration: {
        // Not a Tailwind default; the underline draw is specified at 250ms.
        250: "250ms",
      },
    },
  },
  plugins: [],
};
