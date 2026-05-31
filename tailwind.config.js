/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ethereal: {
          blue: "#3b82f6",     // Soft bright blue
          cyan: "#06b6d4",     // Bright cyan
          purple: "#8b5cf6",   // Soft purple
          white: "#ffffff",
          offwhite: "#f8fafc", // Very light slate
          silver: "#94a3b8",   // Soft silver
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      boxShadow: {
        'blue-glow': '0 0 15px rgba(59, 130, 246, 0.2)',
        'cyan-glow': '0 0 15px rgba(6, 182, 212, 0.2)',
      }
    },
  },
  plugins: [],
}
