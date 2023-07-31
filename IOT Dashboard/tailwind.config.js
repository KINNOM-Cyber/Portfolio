const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Noto_Sans_Thai_Looped: ["Noto Sans Thai Looped", "sans-serif"],
        IBM_Plex_Sans_Thai: ["IBM Plex Sans Thai", "sans-serif"]
      }
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
        'h2': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.bold') },
        'h3': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.bold') },
      })
    })
  ],
}

