import Script from "next/script";

/**
 * @version 0.1
 * Documentation for component UmamiTracking
 * Comment: Used for umami analytics. This component is used in Header component which is then passed to Header component.
 * -------------------------------------------------------------------------------
 */
export const UmamiTracking = () => {
	return (
		<>
			<Script
				id="umami"
				strategy="beforeInteractive"
				src="https://zakopal-analytics.vercel.app/umami.js"
				data-website-id="0a8ccab4-4f92-4b5f-81dc-54fa915d3b08"
			/>
		</>
	);
};
