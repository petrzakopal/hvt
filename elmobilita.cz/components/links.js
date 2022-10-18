import Link from "next/link";
import { useRouter } from "next/router";

/**
 * @version 0.2.2
 * Documentation for component ActiveMobileLink
 * Comment: Active link for mobile design.
 * -------------------------------------------------------------------------------
 * linkAdress - url link to linking page - example: "/foobar"
 * linkName - name of the link text - example: "Lorem Ipsum"
 * keyInput - because this function is mainly used in main menu in map function, has to be passed there, to have unique elements in React - example: {key} (of a map function)
 * rel -> HTML attribute - example: "nofollow"
 * target -> HTML attribute - example: "_blank"
 * listClass -> for list classes - example: ""
 */

// Mobile active link header design
export const ActiveMobileLink = ({
	linkAdress,
	linkName,
	keyInput,
	rel,
	target,
	listClass,
}) => {
	listClass == undefined ? (listClass = "") : listClass;
	return (
		<Link href={linkAdress} key={keyInput}>
			<a
				className={`dark:text-zinc-50 text-zinc-900 cursor-pointer `}
				key={keyInput}
				rel={rel}
				target={target}
			>
				<li
					className={`border-gray-accent/10 border-b-2 h-12 font-normal text flex items-center ${listClass}`}
					key={keyInput}
				>
					{linkName}
				</li>
			</a>
		</Link>
	);
};

/**
 * @version 0.2
 * Documentation for component ActiveLink
 * Comment: Active link for desktop design with hover and active link (current router) highlight.
 * -------------------------------------------------------------------------------
 * linkAdress - url link to linking page - example: "/foobar"
 * linkName - name of the link text - example: "Lorem Ipsum"
 * rel -> HTML attribute - example: "nofollow"
 * target -> HTML attribute - example: "_blank"
 */

// Desktop ActiveLink header design
export const ActiveLink = ({ linkAdress, linkName, rel, target }) => {
	const router = useRouter();
	const currentRoute = router.pathname;
	// console.log(currentRoute);
	return (
		<Link href={linkAdress}>
			<a
				className={`cursor-pointer ${
					currentRoute === linkAdress ? "activeLink" : "notActiveLink"
				} hover:bg-zinc-200 dark:hover:bg-zinc-200 dark:hover:text-zinc-900 hover:text-zinc-900 rounded-lg px-4 py-0.5 transition-all md:inline-block mx-1`}
				rel={rel}
				target={target}
			>
				{linkName}
			</a>
		</Link>
	);
};

/**
 * @version 0.2
 * Documentation for component export const TextLink

 * Comment: Link with arrow SVG.
 * -------------------------------------------------------------------------------
 * linkUrl - url link to linking page - example: "/foobar"
 * linkText - name of the link text - example: "Lorem Ipsum"
 * rel -> HTML attribute - example: "nofollow"
 * target -> HTML attribute - example: "_blank"
 */

export const TextLink = ({ linkUrl, linkText, target, rel }) => {
	return (
		<Link href={linkUrl}>
			<a
				className={`text-left w-fit text-primary-accent after:inline-flex after:top-[0.11em] after:relative  hover:text-primary-accent after:transition-colors after:easy-in-out transition-colors easy-in-out after:[mask:url("/assets/images/misc/external-link.svg")] after:[mask-repeat:no-repeat;] after:[content: "";] after:h-4 after:w-4 after:ml-1 after:bg-primary-accent after:hover:bg-primary-accent after:[mask-size: cover;]`}
				target={target}
				rel={rel}
			>
				{linkText}
			</a>
		</Link>
	);
};

export const TextLinkProperties = `text-left w-fit text-primary-accent after:inline-flex after:top-[0.11em] after:relative  hover:text-primary-accent after:transition-colors after:easy-in-out transition-colors easy-in-out after:[mask:url("/assets/images/misc/external-link.svg")] after:[mask-repeat:no-repeat;] after:[content: "";] after:h-4 after:w-4 after:ml-1 after:bg-primary-accent after:hover:bg-primary-accent after:[mask-size: cover;]`;

export const LinkProperties = `text-left w-fit text-primary-accent hover:text-primary-accent`;
