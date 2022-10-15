import ThemeChanger from "./themechanger";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { ActiveLink, ActiveMobileLink } from "./links";
import { useEffect } from "react";
import MobileMenuCollapseGroup from "./mobilemenucollapsegroup";
import { useRouter } from "next/router";
import DesktopMenuCollapseGroup from "./desktopmenucollapsegroup";
import Link from "next/link";
import {
	Bars2Icon,
	Bars3Icon,
	BoltIcon,
	UserGroupIcon,
	WifiIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
/**
 * @version 0.1.1
 * Documentation for component Navbar
 * Comment: Used as a navigation bar on the desktop or mobile. Notification top banner can be activateed.
 * ------------------------------------------------------------------------------------------------------
 */

const Navbar = () => {
	// Select which MobileMenuLogic yo prefer.
	// When == 1 then it is via Transition from headless ui
	// When == 2 it is via display - no jums seen on page
	const MobileMenuLogic = 2;

	const [isOpen, setIsOpen] = useState(false); // State used to determine mobile menu opening.
	const router = useRouter();
	const [lastScroll, setLastScroll] = useState(0); // State for storing state last current scroll.
	const [lastScrollMem, setLastScrollMem] = useState(0); // State for storing memory value of scroll to get back to last position before mobile menu opens.

	// enabling banner on top of the page
	// automatically changes mobile header position and banner visibility
	const bannerEnabled = false;

	const currentScroll = []; // Current scroll value, pasted to lastScroll and from lastScroll to lastScrollMem.
	useEffect(() => {
		// Handling change of router / url. When the url is changed, close mobile menu and unfix document body.
		const handleRouteChange = (url) => {
			// console.log(`App is changing to ${url}`);
			// if (!isOpen) {
			// 	document.body.classList.remove("fixed");
			// 	document.body.classList.remove("w-full");
			// }
			if (document.body.classList.contains("fixed")) {
				document.body.classList.remove("fixed");
				document.body.classList.remove("overflow-hidden");

				if (MobileMenuLogic == 2) {
					const mobileMenuContents = document.getElementById(
						"mobile-menu-wrapper"
					);
					windowGoToPosition(lastScrollMem);
					mobileMenuContents.classList.remove("block");
					mobileMenuContents.classList.add("hidden");
				}

				// document.body.classList.remove("w-full"); // depracated because of _document.js
			}
			setIsOpen(false);
		};

		router.events.on("routeChangeStart", handleRouteChange); // Handles mobile menu closing when the route changes.

		// Handling Y offset calculation for back scroll when mobile menu is closed.
		const headerWrapper = document.getElementById("header-wrapper");

		window.addEventListener("scroll", () => {
			currentScroll.push(window.pageYOffset);

			currentScroll > 0
				? !headerWrapper.classList.contains("header-border")
					? headerWrapper.classList.add("header-border")
					: ""
				: "";

			currentScroll <= 0
				? headerWrapper.classList.contains("header-border")
					? headerWrapper.classList.remove("header-border")
					: ""
				: "";
			setLastScroll(currentScroll);
		});
		return () => {
			window.removeEventListener("scroll", null);
			router.events.off("routeChangeStart", handleRouteChange);
		};
	}, [lastScroll]);

	/** Function to store window viewport location before opening the mobile menu */
	function windowPositionRet() {
		setLastScrollMem(lastScroll[0]);
	}

	/** Function to scroll to last saved scroll viewport location after closing the mobile menu */
	function windowGoToPosition() {
		window.scrollTo(0, lastScrollMem);
		// console.log("Last scroll mem is " + lastScrollMem);
	}
	return (
		<>
			{bannerEnabled ? (
				<div className="banner w-full h-[var(--banner-height)] justify-center items-center relative dark:bg-gray-800 bg-gray-400 text-black dark:text-white font-semibold text-sm flex z-[99999]">
					<p>Navbar info.</p>
				</div>
			) : (
				""
			)}

			<div
				className="sticky flex flex-row items-center w-full px-8 lg:h-20 sm:h-full top-0 lg:dark:bg-zinc-900/80 dark:bg-zinc-900/100 bg-zinc-50 lg:bg-zinc-50/80 lg:backdrop-blur lg:backdrop-saturate-150 z-[99999]"
				id="header-wrapper"
			>
				<nav className="flex items-center justify-between w-full lg:w-inside-full mx-auto dark:text-zinc-50 text-zinc-900 py-8">
					<div className="nav-first hidden lg:flex flex-row items-center ">
						{/** Second part of desktop header site navigation*/}
						{/* <Link href="/">
						<a
							className={`dark:text-white text-black cursor-pointer ${
								currentRoute === "/" ? "activeLink" : "notActiveLink"
							}`}
						>
							Logo Placeholder
						</a>
					</Link> */}
						<Link href="/">
							<a
								className="cursor-pointer flex flex-row items-center rounded-lg px-4 py-0.5 transition-all font-bold text-xl justify-start justify-items-start"
								aria-label="Example.com"
							>
								<img src="/assets/logo/logo.svg" className="w-10 h-10 mr-2" />
								<span>ElektroMobilita</span>
							</a>
						</Link>
					</div>
					<div className="nav-second hidden lg:block">
						<div className="flex flex-row">
							{/** Second part of desktop header site navigation*/}
							{/** home link then delete and content paste to index.js */}

							<DesktopMenuCollapseGroup
								groupName={"Výběr témat"}
								id={"1"}
								linkData={{
									Vlaky: [
										"Kolejová trakce.",
										<Bars2Icon className={"w-8 h-8 pr-2"} />,
										"/vlak/kapitoly",
									],
									Trolejbusy: [
										"Homadná doprava.",
										<UserGroupIcon className={"w-8 h-8 pr-2"} />,
										"/trolejbus/kapiotoly",
									],
									Elektroautomobily: [
										"Řešení budoucnosti",
										<BoltIcon className={"w-8 h-8 pr-2"} />,
										"/elektromobil/kapitoly",
									],
									LEV: [
										"Lehká elektrická vozidla",
										<WifiIcon className={"w-8 h-8 pr-2"} />,
										"/lev/kapitoly",
									],
								}}
							/>
							<ActiveLink linkAdress={"/autori"} linkName="Autoři" />
						</div>
					</div>
					<div className="nav-third w-9 h-9">
						{/** Third part of desktop header site navigation*/}
						<ThemeChanger />
					</div>
					{/* Mobile menu opener - Hamburger menu */}
					<div className="flex lg:hidden">
						<button
							className="w-9 h-9 dark:bg-zinc-600 bg-zinc-300 rounded-lg dark:black/5 flex items-center justify-center hover:ring-2 ring-zinc-50 transition-all"
							onClick={() => {
								// windowGoToPosition(lastScrollMem);
								// windowPositionRet();
								let mobileMenuContents;
								if (MobileMenuLogic == 2) {
									mobileMenuContents = document.getElementById(
										"mobile-menu-wrapper"
									);
								}

								setIsOpen(!isOpen);

								if (isOpen) {
									document.body.classList.remove("fixed");
									document.body.classList.remove("overflow-hidden");

									if (MobileMenuLogic == 2) {
										mobileMenuContents.classList.remove("block");
										mobileMenuContents.classList.add("hidden");
									}
									windowGoToPosition(lastScrollMem);
								} else {
									windowPositionRet();

									if (MobileMenuLogic == 2) {
										mobileMenuContents.classList.add("block");
										mobileMenuContents.classList.remove("hidden");
									}

									document.body.classList.add("fixed");
									document.body.classList.add("overflow-hidden");
								}
								// document.body.classList.toggle("fixed");
								// document.body.classList.toggle("w-full");
							}}
							type="button"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							{isOpen ? (
								<XMarkIcon className="w-5 h-5 dark:text-zinc-50 text-zinc-900 " />
							) : (
								<Bars3Icon className="w-5 h-5 dark:text-zinc-50 text-zinc-900 " />
							)}
						</button>
					</div>
				</nav>

				<nav className="h-full dark:bg-zinc-900 bg-zinc-50">
					{/* Mobile responsive menu */}

					{MobileMenuLogic == 2 ? (
						<>
							{/* Changing top position because of banner height */}
							<div
								className={`lg:hidden hidden fixed w-full visible px-8 pt-4 inset-x-0 overflow-y-scroll text-base dark:bg-zinc-900 bg-zinc-50 bottom-0 ${
									bannerEnabled ? "top-28" : "top-24"
								}`}
								id="mobile-menu-wrapper"
							>
								<ul className="">
									{/* Paste menu items here */}
									<ActiveMobileLink
										linkAdress={"/"}
										linkName={"elmobilita.cz"}
									/>

									<MobileMenuCollapseGroup
										id="1"
										groupName="Výběr témat"
										linkData={{
											Vlaky: "/vlak/kapitoly",
											Trolejbusy: "/trolejbus/kapitoly",
											Elektroautomobil: "/elektromobil/kapitoly",
											LEV: "/lev/kapitoly",
										}}
									/>

									<ActiveMobileLink
										linkAdress={"/autori"}
										linkName={"Autoři"}
									/>
								</ul>
							</div>
						</>
					) : (
						""
					)}

					{/* Transition from react for smoother transitions */}
					<Transition
						show={isOpen && MobileMenuLogic == 1}
						enter="transition ease-out duration-100 "
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition ease-in duration-75"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						{() => (
							<>
								{/* Changing top position because of banner height */}
								<div
									className={`lg:hidden fixed w-full block visible px-8 pt-4 inset-x-0 overflow-y-scroll text-base dark:bg-zinc-900 bg-zinc-50 bottom-0 ${
										bannerEnabled ? "top-28" : "top-24"
									}`}
								>
									<ul className="">
										<ActiveMobileLink
											linkAdress={"/"}
											linkName={"elmobilita.cz"}
										/>

										<MobileMenuCollapseGroup
											id="1"
											groupName="Výběr témat"
											linkData={{
												Vlaky: "/vlak/kapitoly",
												Trolejbusy: "/trolejbus/kapitoly",
												Elektroautomobil: "/elektromobil/kapitoly",
												LEV: "/lev/kapitoly",
											}}
										/>

										<ActiveMobileLink
											linkAdress={"/autori"}
											linkName={"Autoři"}
										/>
									</ul>
								</div>
							</>
						)}
					</Transition>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
