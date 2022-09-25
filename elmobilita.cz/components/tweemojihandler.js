import Script from "next/script";
import { useEffect } from "react";

/**
 * Documentation for component TwemojiParser
 * Comment: Used for parsing Twemoji emoji images instead of the system emojis.
 * -------------------------------------------------------------------------------
 */

function TweemojiParser() {
	useEffect(() => {
		if (document.readyState == "1") {
			twemoji.parse(document.body, {
				folder: "svg",
				ext: ".svg",
				callback: function (icon, options, variant) {
					switch (icon) {
						case "2197": // ↗️
							return false;
						case "2396": // ↖️
							return false;
					}
					return "".concat(options.base, options.size, "/", icon, options.ext);
				},
			});
		} else {
			twemoji.parse(document.body, {
				folder: "svg",
				ext: ".svg",
				callback: function (icon, options, variant) {
					switch (icon) {
						case "2197": // ↗️
							return false;
						case "2396": // ↖️
							return false;
					}
					return "".concat(options.base, options.size, "/", icon, options.ext);
				},
			});
		}
	});
}

/**
 * Documentation for component TwemojiHandler
 * Comment: Handling changing system emojis with Twemoji.
 * -------------------------------------------------------------------------------
 */

function TweemojiHandler() {
	TweemojiParser();

	return (
		<>
			<Script
				id="tweemoji"
				src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"
				strategy="beforeInteractive"
			/>
		</>
	);
}

export default TweemojiHandler;
