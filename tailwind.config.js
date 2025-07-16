/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom': {
          'teal': '#50D10C',
          'orange': '#FF6A43',
          'yellow': '#FFE270',
          'light-gray': '#F1F1F4',
          'dark-blue': '#1A7193',
        }
      },
    },
  },
  plugins: [],
}; 