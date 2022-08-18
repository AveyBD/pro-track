/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'base': "#E7F6FB",
        'baseDark': "#001533",
        'background': "#E7F6FB",
        'Primary':"#006AFF",
        'header' :"#1B2022",
        'paragraph':"#5C677F"
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
