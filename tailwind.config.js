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
          blue: "#2563FF",
          cyan: "#00CFFF",
          green: "#29FF64",
          dark: "#111827",
          graphite: "#2B2B2B",
          light: "#F5FAFF"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
