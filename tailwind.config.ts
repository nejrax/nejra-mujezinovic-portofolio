import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
      colors: {
        base: {
          950: "#05070B",
        },
        accent: {
          400: "#FF5DAF",
          500: "#FF3D9A",
          600: "#E92D86",
        },
        lilac: {
          400: "#B48CFF",
          500: "#9A6BFF",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 16px 40px rgba(0,0,0,0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
