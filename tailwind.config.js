/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'purpleCandy': '#4F2F8E',
        'lightPurpleCandy': "#E6E5FF",
        'pinkCandy': '#E072A8',
        'lightPinkCandy': "#FFF0F7",
        'darkPinkCandy': "#C7377D",
        'darkGrey': "#1E1E1E",
        'lightGrey': "#7D7D7D"
      },
      fontFamily: {
        'Muli': ['Muli', 'sans-serif'],
        'Baloo': ['Baloo', 'sans-serif']
      },
      boxShadow: {
        'darkShadowPink' : '4px 4px 0px #C7377D',
        'darkShadowGrey' : '4px 4px 0px #1E1E1E',
        'darkShadowLightGrey' : '4px 4px 0px #7D7D7D',
        'darkShadowRed' : '3px 3px 0px #D62020'
      }
    },
  },
  plugins: [],
};
