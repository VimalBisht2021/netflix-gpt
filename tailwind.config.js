// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // or wherever your components live
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide') // ✅ this line is necessary
  ],
}
