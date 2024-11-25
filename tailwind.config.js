/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          1: withOpacity(" --yellow-app-rgb"),
          2: withOpacity("--navyBlue-app-rgb"),
        },
        primary: {
          300: withOpacity("--color-primary-300"),
        },
        secondary: {
          900: withOpacity("--color-secondary-900"),
        },
      },
      fontFamily: {
        sans_light: ["vazir-Regular"],
        sans_normal: ["vazir-Medium"],
        sans_bold: ["vazir-Bold"],
      },

      container: {
        center: true,
      },
      boxShadow: {
        "input-focus": "0 12px 24px -8px rgb(var(--navyBlue-app-rgb))",
      },
    },
  },
  plugins: [],
};
