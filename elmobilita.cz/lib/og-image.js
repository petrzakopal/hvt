const puppeteer = require("puppeteer");
const { createHash } = require("crypto");

/**
 * @version 0.1
 * Documentation help for component GenerateOGImage
 * Comment: Generates OG image on demand. When used in conjuction with getStaticProps and NODE_ENV, it builds images on build time. See docs for getStaticProps. When used in conjuction with getServerSideProps, and without if statement with NODE_ENV, it generates images every time, when page is loaded. That is suitable for development.
 * -------------------------------------------------------------------------------
 */

export default async function GenerateOGImage(
	data,
	path, // path of page, where for which creating og:image
	baseUrl = process.env.SITE_URL // can be different url
) {
	// generate images only at build time with getStaticProps
	// comment this statement, when using getServerSideProps to test the design
	if (process.env.NODE_ENV === "development") {
		return `og image will be generated in production`;
	}

	const url = `${baseUrl}${path}`; // whole URL of page, for which creating og:image

	const hash = createHash("md5").update(url).digest("hex"); // creating MD5 hash of given whole URL of webpage for which creating OG:IMAGE
	const ogImageDir = `./public/assets/images/seo/og`; // relative path to folder to save og:image

	const imagePath = `${ogImageDir}/${hash}.png`; // relative path to file of saving og:image

	const publicPath = `${process.env.SITE_URL}/assets/images/seo/og/${hash}.png`; // public accesible path of og:image

	const browser = await puppeteer.launch(); // launcing headless browser
	const page = await browser.newPage(); // creating page
	await page.setViewport({ width: 1200, height: 630 }); // setting viewport for page to standard og:image size

	await page.setContent(template(data)); // creating page from template
	// await page.goto(pathUrl); // only for testing - going to desired url
	await page.screenshot({ path: imagePath }); // taking screenshot of a og:image and saving to desired imagePath

	await browser.close(); // closing browser

	return publicPath; // returning public path of image to metaData -> https://example.com/foo/bar/foo.bar
}

// template for creating og:image
const template = (data) => {
	return `
			<html lang="cs">
				<head>
					<meta charset="UTF-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<script src="https://cdn.tailwindcss.com"></script>
					<script>
    					tailwind.config = {
      										theme: {
													fontFamily: {
																sans: ["Inter", "system-ui", "sans-serif"],
																},
       												extend: {
															colors: {
																	"rich-black": "rgba(0, 18, 25, <alpha-value>)",
																	"rich-black-lighter": "#031A25",
																	"oxford-blue": "#001D3D",
																	"spanish-blue": "#106CC1",
																	"orange-web": "#FCA311",
																	"ruby-red": "#9B2226",
																	platinum: "#E5E5E5",
																	"granite-gray": "#666666",
																	cultured: "#f8f8f8",
																	"sheen-green": "#70e000",
																	gainsboro: "#dfdfdf",
																	"persian-plum": "#74191D",
																	"violet-color": "#7A24E8",
																	"gray-accent": "rgba(223, 223, 223, <alpha-value>)",
																	btr: "linear-gradient(30deg, var(--spanish-blue), var(--spanish-blue), var(--spanish-blue), var(--ruby-red), var(--ruby-red),var(--ruby-red))",
																	},
															letterSpacing: {
																			30: ".3em",
																			50: ".5em",
																			},
															backgroundImage: { BlueToRedGradient:
																			"linear-gradient(to right, var(--spanish-blue), var(--spanish-blue), var(--spanish-blue), var(--ruby-red), var(--ruby-red),var(--ruby-red))",
																			 }
       														}
     												}
    										}
  						</script>

  					<style>
  					:root {
							--rich-black: #001219;
							--oxford-blue: #001d3d;
							--spanish-blue: #106cc1;
							--orange-web: #fca311;
							--ruby-red: #9b2226;
							--platinum: #e5e5e5;
							--granite-gray: #666666;
							--cultured: #f8f8f8;
							--sheen-green: #70e000;
							--gainsboro: #dfdfdf;
							--persian-plum: #74191d;
							--banner-height: 2.5rem;
							--violet-color: #7a24e8;
							--header-border-bottom: inset 0 -1px 0 0 rgba(223, 223, 223, 0.1);
							--inside-full: 1048px;
					 	}
  					</style>

				</head>

				<div class="w-full h-screen flex flex-col items-center bg-rich-black px-10">
					
					<div class="grid grid-cols-1 gap-y-7 mt-44">
						<h1 class="text-platinum text-6xl font-bold text-center ">
							${data.title}
						</h1>
			
						<h2 class="text-center  text-platinum">
							${data.subTitle}
						</h2>
					</div>
				
					<div class="grid grid-cols-1 gap-y-5 items-center justify-items-center mt-44">
						<img src="https://spacetown.cz/assets/logo/st_logo.svg" class="w-20 h-20" />
						<span class="text-platinum text-lg text-center">spacetown.cz</span>
					</div>
				</div>
				
			</html>
		`;
};
