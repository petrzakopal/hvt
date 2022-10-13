import "../styles/globals.css";
import "../styles/post.css";
import "../styles/holi-theme.css";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	}

	return (
		<>
			<ThemeProvider
				enableSystem={true}
				defaultTheme="dark"
				attribute="class"
				enableColorScheme={true}
			>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
