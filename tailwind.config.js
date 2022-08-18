/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'base': "#E7F6FB",
        'baseDark': "#001533",
        'navyBlue': '#1e517b',
        'blue': '#0077B6',
        'skyBlue': '#00B4D8',
        'seaBlue': '#90E0EF',
        'aqua': '#CAF0F8',
        'cream': '#fdf6f1'
      },
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["emerald", "night"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "night",
  },
};
