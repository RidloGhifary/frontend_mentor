/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        gaya: "1231px",
      },
      backgroundImage: {
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "dest-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "dest-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "dest-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
      },
      colors: {
        mainColor: "#cfd1ec",
        blackGray: "#131523",
      },
    },
  },
  plugins: [],
};
