import Prism from "prismjs";
import { useEffect } from "react";

export const Post = ({ children }) => {
	useEffect(() => {
		const highlight = async () => {
			Prism.highlightAll(); // <--- prepare Prism
		};
		highlight(); // <--- call the async function
	}, []);
	return (
		<>
			<div className="post w-full">{children}</div>
		</>
	);
};
