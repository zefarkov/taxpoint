import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef4ff",
          100: "#dce9ff",
          600: "#1d4f91",
          700: "#163f75",
          800: "#12345f",
          900: "#0b1f3a"
        },
        success: {
          500: "#168a4a",
          600: "#0f703a"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(11, 31, 58, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
