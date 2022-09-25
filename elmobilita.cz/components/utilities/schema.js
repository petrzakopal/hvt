import Script from "next/script";

export const Schema = ({ schema }) => {
	return (
		<Script
			strategy="beforeInteractive"
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema),
			}}
		/>
	);
};
