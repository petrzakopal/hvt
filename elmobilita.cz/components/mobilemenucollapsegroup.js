import { ActiveMobileLink } from "./links";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useRouter } from "next/router";

/**
 * @version 0.1.1
 * Documentation for component MobileMenuCollapseGroup
 * Comment: Used as collapsable menu group.
 * Usage: Mobile Navbar - Navbar component
 * -------------------------------------------------------------------------------
 * id - unique id of component, can be random math number or numeric value - example: 1
 * groupName - name of the group link in the menu - example: "Features"
 * linkData - object containing linkName - name of the inner link, which value is linkUrl
 * linkData={{ linkNames: "/linkurl", linkName2: "/linkurl2"}}
 */

function MobileMenuCollapseGroup({ id, groupName, linkData }) {
	const router = useRouter();
	useEffect(() => {
		// Handling change of router / url. When the url is changed, close mobile menu and unfix document body.
		const handleRouteChange = (url) => {
			let group = document.getElementById(
				`mobile-collapse-group-content-${id}`
			);

			let groupIcon = document.getElementById(
				`mobile-icon-collapse-group-${id}`
			);

			if (!group.classList.contains("hidden")) {
				groupIcon.classList.toggle("-rotate-180");
				group.classList.toggle("hidden");

				group.ariaExpanded === "true"
					? (group.ariaExpanded = "false")
					: (group.ariaExpanded = "true");
			}
		};

		router.events.on("routeChangeStart", handleRouteChange); // Handles mobile menu closing when the route changes.

		return () => {
			router.events.off("routeChangeStart", handleRouteChange);
		};
	});

	return (
		<div className="mobile-menu-collapse-group flex items-center z-[99999]">
			<div className=" w-full block items-center">
				<div className="block items-center">
					<span className="dark:text-zinc-200 text-zinc-900 cursor-pointer h-12 items-center flex  border-gray-accent/10 border-b-2">
						{/* Group opener */}
						<button
							className="w-full text-left"
							aria-controls={`mobile-collapse-group-content-${id}`}
							aria-expanded="false"
							onClick={() => {
								let group = document.getElementById(
									`mobile-collapse-group-content-${id}`
								);

								let groupIcon = document.getElementById(
									`mobile-icon-collapse-group-${id}`
								);
								groupIcon.classList.toggle("-rotate-180");
								group.classList.toggle("hidden");

								group.ariaExpanded === "true"
									? (group.ariaExpanded = "false")
									: (group.ariaExpanded = "true");
							}}
						>
							<span className="justify-between flex items-center">
								{groupName}
								<span>
									<ChevronDownIcon
										className="w-5 h-5 dark:text-zinc-50 text-zinc-900 transition-transform ease-in-out"
										id={`mobile-icon-collapse-group-${id}`}
									/>
								</span>
							</span>
						</button>
					</span>
				</div>
				{/* Group data content */}
				<div
					className="hidden"
					id={`mobile-collapse-group-content-${id}`}
					aria-expanded="false"
				>
					<ul id="link-list" className="dark:text-zinc-400">
						{Object.keys(linkData).map((key) => (
							<ActiveMobileLink
								key={key}
								linkAdress={linkData[key]}
								linkName={key}
								listClass={"!border-0 dark:text-zinc-400 text-zinc-600"}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default MobileMenuCollapseGroup;
