/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        pret: ["PretendardRegular"],
        pretMedium: ["PretendardMedium"],
        pretSemiBold: ["PretendardSemiBold"],
        pretBold: ["PretendardBold"],
      },
    },
  },
  plugins: [],
};
