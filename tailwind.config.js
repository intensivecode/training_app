/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ca8a04",
          secondary: "#4b5563",
          accent: "#00ffff",
          neutral: "#d1d5db",
          "base-100": "#111827",
          info: "#0000ff",
          success: "#00ff00",
          warning: "#facc15",
          error: "#ff0000",
        },
      },
    ],
  },
};
