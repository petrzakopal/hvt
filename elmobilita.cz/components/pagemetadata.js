/**
 * @version 0.1.1
 * Documentation for component PageMetaData
 * Comment: Generating SEO mage metadata with icons.
 * -------------------------------------------------------------------------------
 * data - input page metadata - example
 */

function PageMetaData({ data }) {
	return (
		<>
			<meta content="cs_CZ" property="og:locale" />
			<meta name="description" content={data.meta_description}></meta>
			<meta property="og:title" content={data.og_title} />
			<meta property="og:description" content={data.og_description} />

			<meta property="og:type" content={data.og_type} />
			<meta property="og:url" content={data.og_url} />
			<meta
				property="og:site_name"
				content={process.env.SITE_NAME}
				key="og-site"
			/>
			<meta property="og:image" content={data.og_image} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={data.twitterTitle} />
			<meta name="twitter:description" content={data.twitterDescription} />
			<meta
				name="twitter:image"
				content={data.twitterImage ? data.twitterImage : data.image}
			/>
			<meta name="twitter:site" content={process.env.SITE_TWITTER_USERNAME} />
			<meta
				name="twitter:creator"
				content={process.env.SITE_TWITTER_USERNAME}
			/>
			<link rel="canonical" content={data.canonical_url} />
			<link rel="icon" href="/favicons/favicon.ico" />
			<link
				rel="apple-touch-icon-precomposed"
				sizes="57x57"
				href="/favicons/apple-touch-icon-57x57.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="114x114"
				href="/favicons/apple-touch-icon-114x114.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="72x72"
				href="/favicons/apple-touch-icon-72x72.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="144x144"
				href="/favicons/apple-touch-icon-144x144.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="60x60"
				href="/favicons/apple-touch-icon-60x60.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="120x120"
				href="/favicons/apple-touch-icon-120x120.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="76x76"
				href="/favicons/apple-touch-icon-76x76.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="152x152"
				href="/favicons/apple-touch-icon-152x152.png"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/favicons/favicon-196x196.png"
				sizes="196x196"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/favicons/favicon-96x96.png"
				sizes="96x96"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/favicons/favicon-32x32.png"
				sizes="32x32"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/favicons/favicon-16x16.png"
				sizes="16x16"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/favicons/favicon-128.png"
				sizes="128x128"
			/>
			<meta name="application-name" content={process.env.SITE_NAME} />
			<meta name="msapplication-TileColor" content="#FFFFFF" />
			<meta name="msapplication-TileImage" content="mstile-144x144.png" />
			<meta
				name="msapplication-square70x70logo"
				content="/favicons/mstile-70x70.png"
			/>
			<meta
				name="msapplication-square150x150logo"
				content="/favicons/mstile-150x150.png"
			/>
			<meta
				name="msapplication-wide310x150logo"
				content="/favicons/mstile-310x150.png"
			/>
			<meta
				name="msapplication-square310x310logo"
				content="/favicons/mstile-310x310.png"
			/>
		</>
	);
}

export default PageMetaData;
