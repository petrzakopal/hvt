import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

/**
 * @version 0.1
 * Documentation for component ThemeChanger
 * Comment: Changing dark/light theme.
 * -------------------------------------------------------------------------------
 */

function ThemeChanger() {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const themeColor = {
		light: "#18181b",
		dark: "#fafafa",
	};

	function metaiosBarChange(input) {
		let metaTheme = document.getElementsByName("theme-color");
		metaTheme[0].content = input;
	}
	/* need to check for value when mounted in browser of a user, otherwise don't use this at all - hydratation (we don't know the value because this works on a server )*/
	useEffect(() => {
		setMounted(true);
	});

	const renderThemeChanger = () => {
		if (!mounted) return null;
		const currentTheme = theme === "system" ? systemTheme : theme;

		if (currentTheme === "dark") {
			return (
				<button
					className="w-9 h-9 dark:bg-zinc-600 bg-zinc-300 rounded-lg dark:black flex items-center justify-center hover:ring-2 ring-zinc-300 transition-all"
					onClick={() => {
						setTheme("light");
						metaiosBarChange(themeColor.light);
					}}
				>
					<SunIcon className="w-5 h-5 text-black dark:text-white" />
				</button>
			);
		} else {
			return (
				<button
					className="w-9 h-9 dark:bg-zinc-600 bg-zinc-300 rounded-lg dark:black flex items-center justify-center hover:ring-2 ring-zinc-600 transition-all"
					onClick={() => {
						setTheme("dark");
						metaiosBarChange(themeColor.dark);
					}}
				>
					<MoonIcon className="w-5 h-5 dark:text-white text-black" />
				</button>
			);
		}
	};

	return (
		<>
			<div className="w-9 h-9">{renderThemeChanger()}</div>
		</>
	);
}

export default ThemeChanger;
