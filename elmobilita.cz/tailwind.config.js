/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		fontFamily: {
			sans: ["Inter", "system-ui", "sans-serif"],
		},
		extend: {
			fontSize: {
				xxs: "0.65rem",
			},
			colors: {
				"primary-accent": "#70E000", // primary accent
				"secondary-accent": "#3cb0cd", // secondary accent
				"gray-accent": "rgba(223, 223, 223, <alpha-value>)",
			},
			width: {
				"inside-full": "768px",
			},
			boxShadow: {
				menuDark: "inset 0 -1px 0 0 rgba(223, 223, 223, 0.1)",
				menuLight: "inset 0 -1px 0 0 #E5E5E5",
				menuTopBottomDark:
					"inset 0 -1px 0 0 rgba(223, 223, 223, 0.1),  0 -1px 0 0 rgba(223, 223, 223, 0.1)",
				menuTopBottomLight: "inset 0 -1px 0 0 #E5E5E5, 0 -1px 0 0 #E5E5E5",
				menuTopDark: " 0 -1px 0 0 rgba(223, 223, 223, 0.1)",
				menuTopLight: "0 -1px 0 0 #E5E5E5",
				fullBlack: "0px 4px 7px rgb(0 0 0 / 1)",
				slightPlatinum: "0px 4px 7px rgb(229 229 229 / 0.2)",
			},

			animation: {
				wave: "wave 2s cubic-bezier(0.8, -0.01, 0.2, 1) infinite",
				breathe: "breathe 2s cubic-bezier(0.35, 0.09, 0.53, 1.04) infinite",
				"bounce-10": "bounce-10 5s infinite;",
			},
			keyframes: {
				wave: {
					"0%, 100%": { transform: "rotate(15deg)" },
					"50%": { transform: "rotate(0deg)" },
				},
				breathe: {
					"0%, 100%": { opacity: "75%" },
					"50%": { opacity: "50%" },
				},
				"bounce-10": {
					"0%,100%": {
						transform:
							"translateY(-15%);animation-timing-function: cubic-bezier(0.74, 0, 0.22, 1.04);",
					},
					"50%": {
						transform:
							"translateY(0);animation-timing-function: cubic-bezier(0.74, 0, 0.22, 1.04);",
					},
				},
			},
		},
	},
	plugins: [],
};
