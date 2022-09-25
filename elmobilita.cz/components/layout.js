import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import PageMetaData from "./pagemetadata";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { ParallaxProvider, useParallaxController } from "react-scroll-parallax";
import { useRouter } from "next/router";
import { Schema } from "./utilities/schema";
import { SpaceY } from "./utilities/utilities";

/**
 * @version 0.1
 * Documentation help for component useUpdateControllerOnRouteChange and ParallaxRouteUpdate
 * Comment: Should clear Paralax cache when changing routes.
 * TODO: Maybe will use ParalaxProvider only on page when it is nescessary.
 * -------------------------------------------------------------------------------
 */

function useUpdateControllerOnRouteChange() {
	const router = useRouter();
	const parallaxController = useParallaxController;

	useEffect(() => {
		parallaxController.update;
	}, [router.pathname]);
}

// Maybe use in a hook
const ParallaxRouteUpdate = () => {
	useUpdateControllerOnRouteChange();
	return null;
};

/**
 * @version 0.1.2
 * Documentation help for component DefaultLayout
 * Comment: Default layout of the application with menu/header and footer. Consists of metadata and dark/light mode switching.
 * -------------------------------------------------------------------------------
 */

export const DefaultLayout = ({ children, metaData, schema }) => {
	ParallaxRouteUpdate();
	const [theme, setTheme] = useState("system");
	useEffect(() => {
		window.addEventListener(
			"change",
			setTheme(document.documentElement.className)
		);
		setTheme(document.documentElement.className);
	});
	return (
		<>
			<ThemeProvider
				enableSystem={true}
				defaultTheme="dark"
				attribute="class"
				enableColorScheme={true}
			>
				<div className="flex w-full flex-col items-center justify-center dark:bg-zinc-900 bg-zinc-50 min-h-screen overflow-clip">
					{schema ? (
						<>
							<Schema schema={schema} />
						</>
					) : (
						""
					)}

					<Header />
					<Head>
						<title>{metaData.meta_title}</title>
						<meta
							content="width=device-width, initial-scale=1.0"
							name="viewport"
						/>
						<PageMetaData data={metaData} />
						{/* theme-color meta can't be in PageMetaData component, it gives error, maybe resolve later */}
						{/* This meta tag should be changing iOS top bar color to desired dark/light mode color */}
						<meta
							name="theme-color"
							content={`${theme == "dark" ? "#001219" : "white"}`}
							id="theme-color"
						/>
						{/* theme-color metadata is changed in renderThemeChanger component */}
					</Head>
					<ParallaxProvider>
						<main className="flex lg:w-inside-full w-full flex-1 flex-col items-center px-9 text-center -z-5">
							{children}
							<SpaceY mt={"mt-24"} />
						</main>
					</ParallaxProvider>
					<Footer />
				</div>
			</ThemeProvider>
		</>
	);
};
