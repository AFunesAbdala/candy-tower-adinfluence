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
        'pinkCandy': '#E072A8'
      },
      fontFamily: {
        'Muli' : ['Muli', 'sans-serif']
      },
      boxShadow: {
        'pinkInner': 'inset 0 -5px 10px 0 rgba(224, 114, 168, 0.5)',
        'greyInner': 'inset 0 -5px 10px 0 rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};
