import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--color-base-background)",
        elevated: "var(--color-elevated-surface)",
        cyan: "var(--color-primary-cyan)",
        purple: "var(--color-secondary-purple)",
        gold: "var(--color-quest-gold)",
        foreground: "var(--color-primary-text)",
        muted: "var(--color-muted-text)",
        success: "var(--color-success)",
        card: "var(--color-card-fill)",
      },
      borderColor: {
        card: "var(--color-card-border)",
      },
      borderRadius: {
        control: "var(--radius-control)",
        card: "var(--radius-card)",
      },
      maxWidth: {
        content: "var(--container-width)",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
