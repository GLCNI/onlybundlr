/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			main: ["Roboto"],
			logo: ["Source Sans Pro"],
		},
		colors: {
			background: "#1a1a1a",  // dark background
			primary: "#F5DEB3",    // Wheat color, a light beige
			secondary: "#D2B48C",  // Tan color, a darker beige
			contast: "#e6e6e6",    // light color for contrast on dark background
			message: "#f50505",    // keep bright colors bright for contrast
		},
		extend: {},
	},
	plugins: [],
};
