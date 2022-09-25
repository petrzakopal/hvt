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
				src="/"
				data-website-id=""
			/>
		</>
	);
};
