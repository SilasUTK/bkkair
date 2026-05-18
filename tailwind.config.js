module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#003d82",
          cyan: "#f59e0b",
          green: "#10b981",
          dark: "#111827",
          graphite: "#2B2B2B",
          light: "#F5FAFF"
        }
      },
      fontFamily: {
        prompt: ["var(--font-prompt)", "Prompt", "Kanit", "Noto Sans Thai", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-prompt)", "Prompt", "Kanit", "Noto Sans Thai", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme("fontFamily.prompt"),
            color: theme("colors.slate.700"),
            h1: {
              fontFamily: theme("fontFamily.prompt"),
              fontWeight: "700",
              fontSize: theme("fontSize.4xl"),
              color: theme("colors.slate.900"),
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
              marginBottom: "0.5em",
            },
            h2: {
              fontFamily: theme("fontFamily.prompt"),
              fontWeight: "700",
              fontSize: theme("fontSize.3xl"),
              color: theme("colors.slate.900"),
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
              marginTop: "1.5em",
              marginBottom: "0.5em",
            },
            h3: {
              fontFamily: theme("fontFamily.prompt"),
              fontWeight: "600",
              fontSize: theme("fontSize.2xl"),
              color: theme("colors.slate.800"),
              lineHeight: "1.3",
              letterSpacing: "-0.01em",
              marginTop: "1.25em",
              marginBottom: "0.5em",
            },
            h4: {
              fontFamily: theme("fontFamily.prompt"),
              fontWeight: "600",
              fontSize: theme("fontSize.xl"),
              color: theme("colors.slate.800"),
              marginTop: "1em",
              marginBottom: "0.5em",
            },
            p: {
              fontFamily: theme("fontFamily.prompt"),
              fontSize: theme("fontSize.base"),
              color: theme("colors.slate.700"),
              lineHeight: "1.75",
              marginBottom: "1em",
            },
            a: {
              color: theme("colors.blue.600"),
              textDecoration: "underline",
              "&:hover": {
                color: theme("colors.blue.700"),
              },
            },
            strong: {
              fontWeight: "600",
            },
            button: {
              fontFamily: theme("fontFamily.prompt"),
              fontWeight: "600",
            },
          },
        },
      }),
    }
  },
  plugins: [],
};
