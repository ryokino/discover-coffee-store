/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        colorblack: '#111827',
        colorwhite: '#e5e7eb',
        colorpurpledark: '#4f46e5',
        colorpurple: '#4338ca',
      },
    },
  },
  plugins: [],
}
