// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// this is line code to integrate material-tailwind in the project

// const withMT = require("@material-tailwind/react/utils/withMT");
 
// export default  withMT({
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     fontFamily: {
//       sans: ["Roboto", "sans-serif"],
//     },
//     extend: {},
//   },
//   plugins: [],
// });

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ralewayRegular: ['Regular'],
        ralewayMedium: ['Medium'],
        ralewayBold: ['Bold'],
        ralewaySemibold: ['Semibold'],
      },
      colors: {
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        sidebarColor:{
          0: "#1F263E",
          1: "#303750",
        },
        tonosOscuros:{
          0: "#072d44",
          1: "#064469",
          2: "#5790ab",
          3: "#9ccddb",
          4: "#d0d7e1",

        },
        tonosClaros:{
          0: "#7296a4",
          1: "#9ebecb",
          2: "#cddee5",
          3: "#e6f0f2",
          4: "#efefef",
        }
      },
    },
  },
  plugins: [],
});