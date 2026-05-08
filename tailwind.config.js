module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        glass: "0 20px 60px rgba(15, 23, 42, 0.18)"
      },
      backgroundImage: {
        "studio-gradient":
          "radial-gradient(circle at top left, rgba(99, 102, 241, 0.18), transparent 32%), radial-gradient(circle at top right, rgba(20, 184, 166, 0.18), transparent 28%), linear-gradient(135deg, rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.74))"
      }
    }
  },
  plugins: []
};
