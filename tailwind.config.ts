import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F5F9FF",
          100: "#EDF4FF",
          200: "#EAF2FD",
          300: "#D7E8FB",
          500: "#2F80ED",
          600: "#1C4E95",
          700: "#163B73",
          800: "#102F5E",
          900: "#0A2342"
        },
        electric: {
          400: "#4DA3FF",
          500: "#3B82F6",
          600: "#2F80ED"
        },
        success: {
          500: "#168a4a",
          600: "#0f703a"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(10, 35, 66, 0.11)",
        glow: "0 0 0 4px rgba(77, 163, 255, 0.18), 0 18px 38px rgba(10, 35, 66, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
