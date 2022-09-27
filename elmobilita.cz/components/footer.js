import Link from "next/link";
import { useEffect } from "react";
/**
 *
 * Documentation for component FooterLink
 * Comment: Used as a default footer link.
 * -------------------------------------------------------------------------------
 * linkName - name of the link text - example: "Lorem Ipsum"
 * linkUrl - url link to linking page - example: "/foobar"
 */

// Footer basic link
const FooterLink = ({ linkName, linkUrl, rel, target }) => {
	return (
		<Link href={linkUrl}>
			<a
				className="cursor-pointer lg:text-2xl text-2xl text-zinc-900 dark:text-zinc-50 dark:hover:text-platinum dark:hover:text-primary-accent hover:text-primary-accent font-semibold transition-colors easy-in-out"
				rel={rel}
				target={target}
			>
				{linkName}
			</a>
		</Link>
	);
};

/**
 *
 * Documentation for component FooterLinkList
 * Comment: Basically FooterLink wrapped in <li> component
 * -------------------------------------------------------------------------------
 * linkName - name of the link text - example: "Lorem Ipsum"
 * linkUrl - url link to linking page - example: "/foobar"
 */

// Footer basic link wrapped in a list to get cleaner text in Footer()
const FooterLinkList = ({ linkName, linkUrl, rel, target }) => {
	return (
		<li>
			<FooterLink
				linkName={linkName}
				linkUrl={linkUrl}
				rel={rel}
				target={target}
			/>
		</li>
	);
};
const ScrollToTopHandler = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};
/**
 *
 * Documentation for component Footer
 * Comment: Used as a default page footer.
 * -------------------------------------------------------------------------------
 */

// Main exported function
function Footer() {
	return (
		// Main footer container
		<footer className="flex flex-col w-full items-center lg:py-10 py-10 dark:bg-rich-black-lighter z-[99998]">
			{/* Navigation footer block */}
			<nav
				aria-label="Footer Navigation"
				role="navigation"
				className="mx-auto lg:w-fit px-5 lg:px-0 flex flex-col"
				// other option is to use another mobile layout with clasName = "mx-auto w-8/12 lg:w-auto" and in grid of block of links lg:gap:24 gap-14
			>
				{/* Columns container */}
				<div className="columns-container w-full mx-auto flex flex-row items-center">
					{/* Grid of block of links */}
					<div className="grid lg:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-x-5 gap-y-8 justify-center justify-items-start lg:w-inside-full">
						{/* Footer groups - columns */}
						<div className="footer-column">
							<ul className="footer-navigation-list mt-3 leading-8">
								<FooterLinkList linkName={"Témata →"} linkUrl="/vyber-temat" />
								<FooterLinkList linkName={"Autoři →"} linkUrl="/autori" />
								<FooterLinkList linkName={"Zdroje →"} linkUrl="/zdroje" />

								<li>
									<span
										className="cursor-pointer lg:text-2xl text-2xl text-zinc-900 dark:text-zinc-50 dark:hover:text-platinum dark:hover:text-primary-accent hover:text-primary-accent font-semibold transition-colors easy-in-out"
										onClick={ScrollToTopHandler}
									>
										Scroll ↑
									</span>
								</li>
							</ul>
						</div>
						<div className="footer-column">
							<ul className="footer-navigation-list mt-3 leading-8">
								<FooterLinkList
									linkName={"GitHub ↗"}
									linkUrl="https://github.com/petrzakopal/hvt"
									rel={"external"}
									target={"_blank"}
								/>
								<FooterLinkList
									linkName={"ČVUT FEL ↗"}
									linkUrl="https://fel.cvut.cz/cz/"
									rel={"external"}
									target={"_blank"}
								/>
							</ul>
						</div>

						<div className="footer-column items-end flex flex-col justify-end">
							{/* <ul className="footer-navigation-list mt-3 leading-8"></ul> */}
							<FooterLink linkName={"← Domů"} linkUrl={"/"} />
						</div>
					</div>
				</div>
				<small className="text-left text-zinc-400 text-base mt-5">
					elmobilita.cz 2022 | Všechna práva vyhrazena.
					<br />
					Tato stránka nevyužívá Cookies.
				</small>
			</nav>
		</footer>
	);
}

export default Footer;
