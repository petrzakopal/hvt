// In used npm package docs is used const config and export default config, but it does not work there, so just used module.exports
// Docs: https://github.com/iamvishnusankar/next-sitemap#readme

module.exports = {
	siteUrl: process.env.SITE_URL,
	generateRobotsTxt: true, // (optional)
	// ...other options
};
