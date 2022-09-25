import TweemojiHandler from "./tweemojihandler";
import Navbar from "./navbar";
import { UmamiTracking } from "./umami";
import Script from "next/script";
/**
 * @version 0.1.1
 * Documentation for component Header
 * Comment: Merging components to be used in the desired layout.
 * -------------------------------------------------------------------------------
 */

function Header() {
	return (
		<>
			{process.env.ANALYTICS == "true" ? <UmamiTracking /> : ""}
			<TweemojiHandler />
			<Script id="list.js" strategy="beforeInteractive" src="/js/list.min.js" />
			<Navbar />
		</>
	);
}

export default Header;
