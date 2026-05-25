/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
			's': '0px',
			'sm': '480px',
			'm': '640px',
			'l': '960px',
			'lg': '1280px',
			'xl': '1600px',
			'xxl': '1920px',
		},
    extend: {},
  },
  plugins: [],
}

