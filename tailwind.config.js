/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultConfig');

module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: '#F5F3F2',
      dark: '#FFFFFF',
      text: {
        DEFAULT: '#2c3e50',
        light: '#6C7281',
      },
      light: {
        DEFAULT: '#FAFBFC',
        lighter: '#F3F4F6',
      },
    },
    extend: {},
  },
  plugins: [],
};
