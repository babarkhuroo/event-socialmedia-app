/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        heading: '#240d57',
        para: '#4f4f4f',
        leftGrad: '#8456ec',
        rightGrad: '#e87bF8',
      },
      dropShadow: {
        shadowSmall: '0px 0px 17.6435px rgba(0, 0, 0, 0.05)',
        shadowMedium: '0px 0px 33.1283px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
