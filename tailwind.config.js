/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        nunito: ["nunito"]
      }, 
      colors: {
        primaryColor: "#111111",
        secondaryColor: "#3F3CF7",
        accentColor: "#F8F9FB",
      }
    },
  },
  plugins: [
    ('tailwind-scrollbar'),
  ],
}

