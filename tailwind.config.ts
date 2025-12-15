import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0E0E0E",
        steel: "#2A2A2A",
        accent: "#4A6C8A",
        "accent-alt": "#3F5E5A",
        // Light mode colors
        light: {
          bg: "#FAFAFA",
          surface: "#FFFFFF",
          text: "#1A1A1A",
          "text-muted": "#6B7280",
          border: "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        headline: ["Inter", "Satoshi", "IBM Plex Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

