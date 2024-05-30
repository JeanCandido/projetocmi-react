/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        'cmi-1': '#D9DB49',
        'cmi-2': '#DDDE1A',
        'cmi-3': '#DBC200',
        'cmi-4': '#8e6d00',
      },
    },
  },
  plugins: [],
}