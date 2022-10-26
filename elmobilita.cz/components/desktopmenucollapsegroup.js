import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "next/link";

import { useEffect } from "react";

/**
 * @version 0.1.2
 * Documentation for component DesktopMenuCollapseGroup
 * Comment: Used as collapsable menu group.
 * Usage: Desktop Navbar - Navbar component
 * -------------------------------------------------------------------------------
 * id - unique id of component, can be random math number or numeric value - example: 1
 * groupName - name of the group link in the menu - example: "Features"
 * linkData - object containing linkName - name of the inner link, which value is array of linkSubname, icon, linkUrl - example: linkData={{ linkName: [ "linkSubname", <ChartBarIcon className={"w-8 h-8 pr-2"} />, "/linkUrl",],linkName2: ["linkSubname2",<BellIcon className={"w-8 h-8 pr-2"} />,"/linkUrl2",]} }
 */

/**
 * Changelog
 * 0.1.2 Moved multipleGroupHandler outside of main function DesktopMenuCollapseGroup.
 * 0.1.1 Added closing functionality via click outside Group Content or Button. Needs testing.
 * 0.1 Initial version
 */

// Had to take design from ActiveLink and but it on button because otherwise it would not be good and only animated the link.
function DesktopMenuCollapseGroup({ id, groupName, linkData }) {
	const router = useRouter();
	const pathname = router.pathname;

	useEffect(() => {
		OutsideClickGroupContentHandle(id);

		// Handles router events
		const handleRouteChangeDesktop = (url) => {
			multipleGroupHandler(null, id);
		};

		// When const name = (props) => {} is used, when calling handler, do not use this parentheses () in handler.
		router.events.on("routeChangeStart", handleRouteChangeDesktop);
		return () => {
			router.events.off("routeChangeStart", handleRouteChangeDesktop);
		};
	}, []);

	return <>
        {/* Group link and icon opener */}
        <button
            className={`flex flex-row items-center dark:hover:bg-zinc-200 dark:hover:text-zinc-900 hover:bg-zinc-200 hover:text-zinc-900 rounded-lg px-4 py-0.5 transition-all mx-1 easy-in-out ${
                pathname.includes("aktivity") && groupName == "Aktivity"
                    ? "bg-white dark:text-zinc-50 text-zinc-900"
                    : ""
            }`}
            aria-controls={`desktop-collapse-group-content-${id}`}
            aria-expanded="false"
            id={`desktop-collapse-group-button-${id}`}
            onClick={() => {
                multipleGroupHandler("clickButton", id);
                let group = document.getElementById(
                    `desktop-collapse-group-content-${id}`
                );
                let groupIcon = document.getElementById(
                    `desktop-icon-collapse-group-${id}`
                );
                groupIcon.classList.toggle("-rotate-180");
                group.classList.toggle("hidden");

                group.ariaExpanded === "true"
                    ? (group.ariaExpanded = "false")
                    : (group.ariaExpanded = "true");
            }}
        >
            <span className={""}>{groupName}</span>
            <span>
                <ChevronDownIcon
                    className={`w-5 h-5 ml-2 transition-transform easy-in-out`}
                    id={`desktop-icon-collapse-group-${id}`}
                />
            </span>
        </button>
        {/* Group mega container - full width of a page with background */}
        {/* Using id of group determined in props to distinguish multiple groups */}
        <div
            className="hidden absolute top-20 lg:w-full  left-0 items-center bg-zinc-50 dark:bg-zinc-900 desktop-expandable-menu-container"
            id={`desktop-collapse-group-content-${id}`}
            aria-expanded="false"
        >
            {/* Grid of a links */}
            <div className="grid grid-cols-3 gap-8 justify-center justify-items-start content-center lg:w-inside-full h-auto h-min-12 mx-auto items-center p-8 py-4 bg-transparent">
                {/* Mapping entries
                Object.entries(props) takes input object and creates array consisting of keys and values [key, value], when value is in this scenario value too. So we get [key, value[]] where key is linkName, value[] consists of linkUrl = linkData[2], linkIcon = linkData[1] and linkSubname = linkData[0]. Then this [key, value[0]] pair is mapped to linkName and linkData[] array property and used. So we iterate/map over all entries in input object. */}
                {Object.entries(linkData).map(([linkName, linkData]) => (
                    (<Link
                        href={linkData[2]}
                        key={linkName}
                        className="hover:bg-zinc-200 hover:dark:bg-zinc-200 hover:dark:text-zinc-900 hover:text-zinc-900 rounded-lg px-4 py-0.5 transition-all font-bold text-sm flex flex-col w-full">

                        <div className="flex flex-row items-center">
                            {linkData[1]}
                            <span>{linkName}</span>
                        </div>
                        <span className="text-sm font-normal pl-8">{linkData[0]}</span>

                    </Link>)
                ))}
            </div>
        </div>
    </>;
}

export default DesktopMenuCollapseGroup;

/**
 * @version 0.1
 * Documentation for component OutsideClickGroupContentHandle
 * Comment: Used for closing and opening Collapseable group content via click outside buttons/components.
 * Usage: Desktop Navbar - Navbar component
 * -------------------------------------------------------------------------------
 * id - unique id of component, can be random math number or numeric value - example: 1 - pasted from main function DesktopMenuCollapseGroup.
 */

/**
 * Changelog
 *
 */

const OutsideClickGroupContentHandle = (id) => {
	const expandableMenu = document.querySelectorAll(
		`[id*="desktop-collapse-group-content"]`
	);

	for (let i = 1; i <= expandableMenu.length; i++) {
		const collapseableGroupContentElement = document.getElementById(
			`desktop-collapse-group-content-${i}`
		);
		const collapseableGroupButtonElement = document.getElementById(
			`desktop-collapse-group-button-${i}`
		);

		document.addEventListener("click", (event) => {
			const isClickInsideGroupContent =
				collapseableGroupContentElement.contains(event.target);
			const isClickInsideGroupButton = collapseableGroupButtonElement.contains(
				event.target
			);

			if (
				!isClickInsideGroupContent &&
				!isClickInsideGroupButton &&
				!collapseableGroupContentElement.classList.contains("hidden")
			) {
				console.log("Click outside.");
				multipleGroupHandler(null, i);
			}
		});
	}
};

/**
 * @version 0.1
 * Documentation for component multipleGroupHandler
 * Comment: Used for closing and opening Collapseable group content.
 * Usage: Desktop Navbar - Navbar component
 * -------------------------------------------------------------------------------
 * id - unique id of component, can be random math number or numeric value - example: 1
 * selector - used to identify if clicked button or router change, when button click - selector = "clickButton" otherwise null
 */

/**
 * Changelog
 *
 */

// Opening a closing multiple menu groups
// Used as a part of onClick action and to handle closing menu - submenu groups when router / path changes
// selector is used to determine, if function is called from 'clickButton', where we need to close other expanded groups but at button click opened group, when selector == null or else we are calling the handler when changing routes, so it is needed to close all groups - otherwire the group would stay open.

function multipleGroupHandler(selector, id) {
	const expandableMenu = document.querySelectorAll(
		`[id*="desktop-collapse-group-content"]`
	);

	if (selector === "clickButton") {
		for (let i = 1; i <= expandableMenu.length; i++) {
			if (i != id) {
				let group = document.getElementById(
					`desktop-collapse-group-content-${i}`
				);
				let groupIcon = document.getElementById(
					`desktop-icon-collapse-group-${i}`
				);

				if (!group.classList.contains("hidden")) {
					group.classList.add("hidden");

					// This if statement is redundant, maybe delete later
					groupIcon.classList.contains("-rotate-180")
						? groupIcon.classList.remove("-rotate-180")
						: null;

					group.ariaExpanded === "true"
						? (group.ariaExpanded = "false")
						: (group.ariaExpanded = "true");
				}
			}
		}
	} else {
		for (let i = 1; i <= expandableMenu.length; i++) {
			let group = document.getElementById(
				`desktop-collapse-group-content-${i}`
			);
			let groupIcon = document.getElementById(
				`desktop-icon-collapse-group-${i}`
			);

			if (!group.classList.contains("hidden")) {
				group.classList.add("hidden");

				// This if statement is redundant, maybe delete later
				groupIcon.classList.contains("-rotate-180")
					? groupIcon.classList.remove("-rotate-180")
					: null;

				group.ariaExpanded === "true"
					? (group.ariaExpanded = "false")
					: (group.ariaExpanded = "true");
			}
		}
	}
}
