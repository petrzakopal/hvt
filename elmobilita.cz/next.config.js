/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		providerImportSource: "@mdx-js/react",
	},
});

module.exports = withMDX({
	pageExtensions: ["js", "jsx", "md", "mdx"],
	reactStrictMode: false,
	i18n: {
		locales: ["cs"],
		defaultLocale: "cs",
	},
	images: {
		domains: ["localhost", "ghost.example.com", "images.unsplash.com"],
	},
	experimental: {
		scrollRestoration: true,
	},

	// if running development environment or runing build with "TEST_ENV=true npm run build", there will be noindex header. Check it with curl -I example.com
	async headers() {
		if (
			process.env.NODE_ENV == "development" ||
			process.env.TEST_ENV == "true"
		) {
			return [
				{
					source: "/:path*",
					headers: [
						{
							key: "x-robots-tag",
							value: "noindex",
						},
					],
				},
			];
		} else {
			return [];
		}
	},
});
