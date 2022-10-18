import Prism from "prismjs";
import { useEffect } from "react";
import { PlayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

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

export const Citation = ({ children, href }) => {
	return (
		<>
			<a href={href} className="citation">
				<span className="">{children}</span>
			</a>
		</>
	);
};

export const VideoImageLink = ({
	children,
	imageUrl,
	alt,
	linkUrl,
	rel,
	target,
}) => {
	return (
		<div className="relative video-image-link flex flex-col items-center justify-center mx-auto rounded-xl ml-[-3vw] w-[calc(100%+6vw] h-80 group cursor-pointer my-5">
			{/* {children} */}
			<Link href={linkUrl}>
				<a rel={rel} target={target}>
					<PlayIcon className="relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200" />
					<picture className="rounded-xl z-[1]">
						<Image
							src={imageUrl}
							layout={"fill"}
							objectFit={"cover"}
							className={
								"rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe transition-all ease-in-out"
							}
							alt={alt}
						/>
					</picture>
				</a>
			</Link>
		</div>
	);
};

import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

export const Fact = ({
	children,
	color,
	header,
	description,
	copyToClipboard,
	enableCopyToClipboard,
}) => {
	let FactDesign;
	let ToolTipDesign;
	let ClipBoardContent;

	if (copyToClipboard == "content") {
		ClipBoardContent = children.props.children;
	} else {
		ClipBoardContent = copyToClipboard;
	}

	switch (color) {
		case "primary":
			FactDesign = "bg-primary-accent/20 border-2 border-primary-accent";
			ToolTipDesign = "border-[1px] border-zinc-50";
			break;

		case "secondary":
			FactDesign = "bg-secondary-accent/20 border-2 border-secondary-accent";
			ToolTipDesign = "border-2 border-secondary-accent";

			break;
	}

	return (
		<>
			<div
				className={`relative fact-wrapper grid grid-cols-1 gap-y-2 w-full text-zinc-900 dark:text-zinc-50 rounded-lg px-4 py-3 ${FactDesign}`}
			>
				{enableCopyToClipboard == "true" ? (
					<>
						<div
							className="absolute right-4 top-2 cursor-pointer peer"
							onClick={() => {
								navigator.clipboard.writeText(ClipBoardContent);
								console.log(ClipBoardContent);
							}}
						>
							<DocumentDuplicateIcon className={"w-5 h-5"} />
						</div>
						<div
							className={`absolute -right-2 top-8 hidden peer-hover:block z-10 py-2 px-3 text-sm font-medium text-zinc-50 dark:text-zinc-50 bg-zinc-900 dark:bg-zinc-900 rounded-lg shadow-sm opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ${ToolTipDesign} flex flex-col items-center justify-center z-[2] mt-1`}
						>
							Kopírovat
						</div>
						<svg
							className="absolute w-6 h-6 z-[1] text-zinc-900 dark:text-zinc-900 fill-current stroke-zinc-50 right-5 top-7 hidden peer-hover:block opacity-0 peer-hover:opacity-100 transition-opacity duration-300"
							width="8"
							height="8"
						>
							<rect
								x="12"
								y="-10"
								width="8"
								height="8"
								transform="rotate(45)"
							/>
						</svg>
					</>
				) : (
					""
				)}

				<div className="fact-header flex flex-col">
					<span className="text-2xl font-bold">{header}</span>

					{description ? (
						<>
							<div className="text-sm italic text-zinc-800 dark:text-zinc-200">
								{description}
							</div>
						</>
					) : (
						""
					)}
				</div>

				<div className="fact-text">{children}</div>
			</div>
		</>
	);
};

export const PostFooterNavigation = ({
	hrefNext,
	hrefPrevious,
	previous,
	next,
	previousEnabled,
	nextEnabled,
}) => {
	return (
		<>
			<div className="w-full grid grid-cols-2 mt-14">
				{previousEnabled == "true" ? (
					<>
						<button className="text-left h-10">
							<Link href={hrefPrevious}>
								<a className="cursor-pointer">
									<span className="bg-primary-accent/20 border-2 border-primary-accent px-4 py-2 rounded-lg text-zinc-900 dark:text-zinc-50">
										{previous}
									</span>
								</a>
							</Link>
						</button>
					</>
				) : (
					<>
						<div></div>
					</>
				)}

				{nextEnabled == "true" ? (
					<>
						<button className="text-right h-10">
							<Link href={hrefNext}>
								<a className="cursor-pointer">
									<span className="bg-primary-accent/20 border-2 border-primary-accent px-4 py-2 rounded-lg text-zinc-900 dark:text-zinc-50">
										{next}
									</span>
								</a>
							</Link>
						</button>
					</>
				) : (
					<>
						<div></div>
					</>
				)}
			</div>
		</>
	);
};

export const ListNavigationWrapper = ({ children }) => {
	return (
		<>
			<ol>{children}</ol>
		</>
	);
};

export const ListNavigationItem = ({ href, text }) => {
	return (
		<>
			<li>
				<Link href={href}>
					<a className="internal">{text}</a>
				</Link>
			</li>
		</>
	);
};

export const TrolejbusyVideoGallery = () => {
	return (
		<>
			<div className="relative grid grid-cols-1 md:grid-cols-2 w-full gap-x-3 gap-y-4">
				<div className="relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer">
					{/* {children} */}
					<Link href={"https://www.youtube.com/watch?v=73x5TA9vCbU"}>
						<a rel={"external"} target={"_blank"} className="internal">
							<PlayIcon className="relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200" />
							<picture className="rounded-xl z-[1]">
								<Image
									src={
										"/assets/images/trolejbus/trolejbusy-v-ceske-a-slovenske-republice.webp"
									}
									layout={"fill"}
									objectFit={"cover"}
									className={
										"rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe transition-all ease-in-out"
									}
									alt={"Trolejbusy v České a Slovenské republice 1/4"}
								/>
							</picture>
						</a>
					</Link>
					<span className="relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5">
						1. část
					</span>
				</div>
				<div className="relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer">
					{/* {children} */}
					<Link href={"https://www.youtube.com/watch?v=y574VfBqUMM"}>
						<a rel={"external"} target={"_blank"} className="internal">
							<PlayIcon className="relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200" />
							<picture className="rounded-xl z-[1]">
								<Image
									src={
										"/assets/images/trolejbus/trolejbusy-v-ceske-a-slovenske-republice.webp"
									}
									layout={"fill"}
									objectFit={"cover"}
									className={
										"rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe transition-all ease-in-out"
									}
									alt={"Trolejbusy v České a Slovenské republice 1/4"}
								/>
							</picture>
						</a>
					</Link>
					<span className="relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5">
						2. část
					</span>
				</div>
				<div className="relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer">
					{/* {children} */}
					<Link href={"https://www.youtube.com/watch?v=gqM-kkwqOQI"}>
						<a rel={"external"} target={"_blank"} className="internal">
							<PlayIcon className="relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200" />
							<picture className="rounded-xl z-[1]">
								<Image
									src={
										"/assets/images/trolejbus/trolejbusy-v-ceske-a-slovenske-republice.webp"
									}
									layout={"fill"}
									objectFit={"cover"}
									className={
										"rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe transition-all ease-in-out"
									}
									alt={"Trolejbusy v České a Slovenské republice 1/4"}
								/>
							</picture>
						</a>
					</Link>
					<span className="relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5">
						3. část
					</span>
				</div>
				<div className="relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer">
					{/* {children} */}
					<Link href={"https://www.youtube.com/watch?v=61DuiVpZlrI"}>
						<a rel={"external"} target={"_blank"} className="internal">
							<PlayIcon className="relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200" />
							<picture className="rounded-xl z-[1]">
								<Image
									src={
										"/assets/images/trolejbus/trolejbusy-v-ceske-a-slovenske-republice.webp"
									}
									layout={"fill"}
									objectFit={"cover"}
									className={
										"rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe transition-all ease-in-out"
									}
									alt={"Trolejbusy v České a Slovenské republice 1/4"}
								/>
							</picture>
						</a>
					</Link>
					<span className="relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5">
						4. část
					</span>
				</div>
			</div>
		</>
	);
};

export const Shows = () => {
	return (
		<>
			<div className="relative grid grid-cols-1 md:grid-cols-2 w-full gap-x-3 gap-y-4">
				<div className="relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer hover:opacity-50 transition-all ease-in-out">
					{/* {children} */}
					<Link href={"https://fullycharged.show/"}>
						<a rel={"external"} target={"_blank"} className="internal">
							<picture className="rounded-xl z-[1]">
								<Image
									src={"/assets/images/misc/fully-charged-show.svg"}
									layout={"fill"}
									objectFit={"contain"}
									className={
										"rounded-lg group-hover:md:animate-breathe transition-all ease-in-out bg-[#f7f71c] !p-5"
									}
									alt={"Fully Charged Show"}
								/>
							</picture>
						</a>
					</Link>
				</div>
				<div className="relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer hover:opacity-50 transition-all ease-in-out">
					{/* {children} */}
					<Link href={"https://insideevs.com/"}>
						<a rel={"external"} target={"_blank"} className="internal">
							<picture className="rounded-xl z-[1]">
								<Image
									src={"/assets/images/misc/inside-ev.webp"}
									layout={"fill"}
									objectFit={"contain"}
									className={
										"rounded-lg group-hover:md:animate-breathe transition-all ease-in-out bg-white !p-5"
									}
									alt={"Inside EV's"}
								/>
							</picture>
						</a>
					</Link>
				</div>
				<div className="relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer hover:opacity-50 transition-all ease-in-out">
					{/* {children} */}
					<Link href={"https://micromobility.io/"}>
						<a rel={"external"} target={"_blank"} className="internal">
							<picture className="rounded-xl z-[1]">
								<Image
									src={"/assets/images/misc/micromobility.webp"}
									layout={"fill"}
									objectFit={"cover"}
									className={
										"rounded-lg group-hover:md:animate-breathe transition-all ease-in-out"
									}
									alt={"Micromobility"}
								/>
							</picture>
						</a>
					</Link>
				</div>
				<div className="relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer hover:opacity-50 transition-all ease-in-out">
					{/* {children} */}
					<Link href={"https://thedriven.io/"}>
						<a rel={"external"} target={"_blank"} className="internal">
							<picture className="rounded-xl z-[1]">
								<Image
									src={"/assets/images/misc/the-driven.webp"}
									layout={"fill"}
									objectFit={"contain"}
									className={
										"rounded-lg group-hover:md:animate-breathe transition-all ease-in-out !p-5 bg-white"
									}
									alt={"The Driven Podcast"}
								/>
							</picture>
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};
