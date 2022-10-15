function getAnchor(text) {
	return (
		text
			.toLowerCase()
			.normalize("NFD")
			// .replace(/[\u0300-\u036f]/g, "") // same as following but in ascii probably
			.replace(/[^a-z0-9 ]/g, "")
			.replace(/[ ]/g, "-")
	);
}

export const H2 = ({ children }) => {
	const anchor = getAnchor(children);
	const link = `#${anchor}`;
	return (
		<h2 id={anchor}>
			{/* <a href={link} className="anchor-link"></a> */}
			{children}
		</h2>
	);
};

export const H3 = ({ children }) => {
	const anchor = getAnchor(children);
	const link = `#${anchor}`;
	return (
		<h3 id={anchor}>
			{/* <a href={link} className="anchor-link"></a> */}
			{children}
		</h3>
	);
};

export const H4 = ({ children }) => {
	const anchor = getAnchor(children);
	const link = `#${anchor}`;
	return (
		<h4 id={anchor}>
			{/* <a href={link} className="anchor-link"></a> */}
			{children}
		</h4>
	);
};

export const H5 = ({ children }) => {
	const anchor = getAnchor(children);
	const link = `#${anchor}`;
	return (
		<h5 id={anchor}>
			{/* <a href={link} className="anchor-link"></a> */}
			{children}
		</h5>
	);
};

export const H6 = ({ children }) => {
	const anchor = getAnchor(children);
	const link = `#${anchor}`;
	return (
		<h6 id={anchor}>
			{/* <a href={link} className="anchor-link"></a> */}
			{children}
		</h6>
	);
};
