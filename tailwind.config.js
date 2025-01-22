/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGreen: "#1E2620",
        beige: '#f5f5dc',
        'brown-700': '#654321',
        'brown-800': '#4d2e1a',
        'light-green': '#DDF1DC', // Add the new color here
      },
      height: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
};
