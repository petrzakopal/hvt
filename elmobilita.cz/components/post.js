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
		<div className="relative video-image-link flex flex-col items-center justify-center mx-auto rounded-xl h-80 group cursor-pointer my-5">
			{/* {children} */}
			<Link href={linkUrl} rel={rel} target={target}>
				<PlayIcon className="relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200" />
				<picture className="rounded-xl z-[1]">
					<Image
						src={imageUrl}
						fill
						className={
							"rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe transition-all ease-in-out object-cover"
						}
						alt={alt}
					/>
				</picture>
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
						<div className="flex w-full justify-start">
							<button className="text-left h-10 w-fit">
								<Link href={hrefPrevious} className="cursor-pointer">
									<span className="bg-primary-accent/20 border-2 border-primary-accent px-4 py-2 rounded-lg text-zinc-900 dark:text-zinc-50">
										{previous}
									</span>
								</Link>
							</button>
						</div>
					</>
				) : (
					<>
						<div></div>
					</>
				)}

				{nextEnabled == "true" ? (
					<>
						<div className="flex w-full justify-end">
							<button className="text-right h-10 w-fit ">
								<Link href={hrefNext} className="cursor-pointer">
									<span className="bg-primary-accent/20 border-2 border-primary-accent px-4 py-2 rounded-lg text-zinc-900 dark:text-zinc-50">
										{next}
									</span>
								</Link>
							</button>
						</div>
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
				<Link href={href} className="internal">
					{text}
				</Link>
			</li>
		</>
	);
};

export const TrolejbusyVideoGallery = () => {
	return (
		<>
			<div className="relative grid grid-cols-1 md:grid-cols-2 w-full gap-x-3 gap-y-4">
				<div className="group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer">
					{/* {children} */}
					<Link
						href={"https://www.youtube.com/watch?v=73x5TA9vCbU"}
						rel={"external"}
						target={"_blank"}
						className="internal"
					>
						<PlayIcon className="relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200" />
						<picture className="rounded-xl z-[1]">
							<Image
								src={
									"/assets/images/trolejbus/trolejbusy-v-ceske-a-slovenske-republice.webp"
								}
								fill
								className={
									"rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe group-hover:saturate-100 transition-all ease-in-out object-cover"
								}
								alt={"Trolejbusy v České a Slovenské republice 1/4"}
							/>
						</picture>
					</Link>
					<span className="relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5">
						1. část
					</span>
				</div>
				<div className="group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer">
					{/* {children} */}
					<Link
						href={"https://www.youtube.com/watch?v=y574VfBqUMM"}
						rel={"external"}
						target={"_blank"}
						className="internal"
					>
						<PlayIcon className="relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200" />
						<picture className="rounded-xl z-[1]">
							<Image
								src={
									"/assets/images/trolejbus/trolejbusy-v-ceske-a-slovenske-republice.webp"
								}
								fill
								className={
									"rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe group-hover:saturate-100 transition-all ease-in-out object-cover"
								}
								alt={"Trolejbusy v České a Slovenské republice 1/4"}
							/>
						</picture>
					</Link>
					<span className="relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5">
						2. část
					</span>
				</div>
				<div className="group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer">
					{/* {children} */}
					<Link
						href={"https://www.youtube.com/watch?v=gqM-kkwqOQI"}
						rel={"external"}
						target={"_blank"}
						className="internal"
					>
						<PlayIcon className="relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200" />
						<picture className="rounded-xl z-[1]">
							<Image
								src={
									"/assets/images/trolejbus/trolejbusy-v-ceske-a-slovenske-republice.webp"
								}
								fill
								className={
									"rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe group-hover:saturate-100 transition-all ease-in-out object-cover"
								}
								alt={"Trolejbusy v České a Slovenské republice 1/4"}
							/>
						</picture>
					</Link>
					<span className="relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5">
						3. část
					</span>
				</div>
				<div className="group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer">
					{/* {children} */}
					<Link
						href={"https://www.youtube.com/watch?v=61DuiVpZlrI"}
						rel={"external"}
						target={"_blank"}
						className="internal"
					>
						<PlayIcon className="relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200" />
						<picture className="rounded-xl z-[1]">
							<Image
								src={
									"/assets/images/trolejbus/trolejbusy-v-ceske-a-slovenske-republice.webp"
								}
								fill
								className={
									"rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe group-hover:saturate-100 transition-all ease-in-out object-cover"
								}
								alt={"Trolejbusy v České a Slovenské republice 1/4"}
							/>
						</picture>
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
				<div className="group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer hover:opacity-50 transition-all ease-in-out">
					{/* {children} */}
					<Link
						href={"https://fullycharged.show/"}
						rel={"external"}
						target={"_blank"}
						className="internal"
					>
						<picture className="rounded-xl z-[1]">
							<Image
								src={"/assets/images/misc/fully-charged-show.svg"}
								fill
								className={
									"rounded-lg group-hover:md:animate-breathe transition-all ease-in-out bg-[#f7f71c] !p-5 object-contain"
								}
								alt={"Fully Charged Show"}
							/>
						</picture>
					</Link>
				</div>
				<div className="group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer hover:opacity-50 transition-all ease-in-out">
					{/* {children} */}
					<Link
						href={"https://insideevs.com/"}
						rel={"external"}
						target={"_blank"}
						className="internal"
					>
						<picture className="rounded-xl z-[1]">
							<Image
								src={"/assets/images/misc/inside-ev.webp"}
								fill
								className={
									"rounded-lg group-hover:md:animate-breathe transition-all ease-in-out bg-white !p-5 object-contain"
								}
								alt={"Inside EV's"}
							/>
						</picture>
					</Link>
				</div>
				<div className="group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer hover:opacity-50 transition-all ease-in-out">
					{/* {children} */}
					<Link
						href={"https://micromobility.io/"}
						rel={"external"}
						target={"_blank"}
						className="internal"
					>
						<picture className="rounded-xl z-[1]">
							<Image
								src={"/assets/images/misc/micromobility.webp"}
								fill
								className={
									"rounded-lg group-hover:md:animate-breathe transition-all ease-in-out object-contain"
								}
								alt={"Micromobility"}
							/>
						</picture>
					</Link>
				</div>
				<div className="group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer hover:opacity-50 transition-all ease-in-out">
					{/* {children} */}
					<Link
						href={"https://thedriven.io/"}
						rel={"external"}
						target={"_blank"}
						className="internal"
					>
						<picture className="rounded-xl z-[1]">
							<Image
								src={"/assets/images/misc/the-driven.webp"}
								fill
								className={
									"rounded-lg group-hover:md:animate-breathe transition-all ease-in-out !p-5 bg-white object-contain"
								}
								alt={"The Driven Podcast"}
							/>
						</picture>
					</Link>
				</div>
			</div>
		</>
	);
};

export const VlakVideoGallery = () => {
	return (
		<>
			<div className="relative grid grid-cols-1 md:grid-cols-2 w-full gap-x-3 gap-y-4">
				<div className="group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer">
					{/* {children} */}
					<Link
						href={"https://www.youtube.com/watch?v=dC1Ucwl8LHs"}
						rel={"external"}
						target={"_blank"}
						className="internal"
					>
						<PlayIcon className="relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200" />
						<picture className="rounded-xl z-[1]">
							<Image
								src={"/assets/images/vlak/video-elektrizace-trati-csd.webp"}
								fill
								className={
									"rounded-lg opacity-60 saturate-0 group-hover:saturate-100 group-hover:md:animate-breathe transition-all ease-in-out object-cover"
								}
								alt={"Elektrizace tratí ČSD"}
							/>
						</picture>
					</Link>
					<span className="relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5 text-center">
						Elektrizace tratí ČSD
					</span>
				</div>

				<div className="group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer">
					{/* {children} */}
					<Link
						href={"https://www.youtube.com/watch?v=EOdATLzRGHc"}
						rel={"external"}
						target={"_blank"}
						className="internal"
					>
						<PlayIcon className="relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200" />
						<picture className="rounded-xl z-[1]">
							<Image
								src={"/assets/images/vlak/video-tgv-speed-record.webp"}
								fill
								className={
									"rounded-lg opacity-60 saturate-0 group-hover:saturate-100 group-hover:md:animate-breathe transition-all ease-in-out object-cover"
								}
								alt={"TGV speed record 574,8 km/h"}
							/>
						</picture>
					</Link>
					<span className="relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5 text-center">
						TGV speed record 574,8 km/h
					</span>
				</div>

				<div className="group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer">
					{/* {children} */}
					<Link
						href={"https://www.youtube.com/watch?v=voIpxChh7nE&t"}
						rel={"external"}
						target={"_blank"}
						className="internal"
					>
						<PlayIcon className="relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200" />
						<picture className="rounded-xl z-[1]">
							<Image
								src={"/assets/images/vlak/video-lokomotiva-skoda-rady-363.webp"}
								fill
								className={
									"rounded-lg opacity-60 saturate-0 group-hover:saturate-100 group-hover:md:animate-breathe transition-all ease-in-out object-cover"
								}
								alt={"Lokomotiva Škoda řady 363 (Eso) dokument"}
							/>
						</picture>
					</Link>
					<span className="relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5 text-center">
						Lokomotiva Škoda řady 363 (Eso) dokument
					</span>
				</div>

				<div className="group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer">
					{/* {children} */}
					<Link
						href={"https://www.youtube.com/watch?v=rpzx1CzwccY"}
						rel={"external"}
						target={"_blank"}
						className="internal"
					>
						<PlayIcon className="relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200" />
						<picture className="rounded-xl z-[1]">
							<Image
								src={
									"/assets/images/vlak/video-trisystemova-lokomotiva-emil-zatopek.webp"
								}
								fill
								className={
									"rounded-lg opacity-60 saturate-0 group-hover:saturate-100 group-hover:md:animate-breathe transition-all ease-in-out object-cover"
								}
								alt={"Třísystémová lokomotiva Emil Zátopek"}
							/>
						</picture>
					</Link>
					<span className="relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5 text-center">
						Třísystémová lokomotiva Emil Zátopek
					</span>
				</div>

				<div className="group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer">
					{/* {children} */}
					<Link
						href={"https://www.youtube.com/watch?v=-2-bFSuukOM"}
						rel={"external"}
						target={"_blank"}
						className="internal"
					>
						<PlayIcon className="relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200" />
						<picture className="rounded-xl z-[1]">
							<Image
								src={"/assets/images/vlak/video-sen-o-rychlovlaku.webp"}
								fill
								className={
									"rounded-lg opacity-60 saturate-0 group-hover:saturate-100 group-hover:md:animate-breathe transition-all ease-in-out object-cover"
								}
								alt={"Sen o rychlovlaku"}
							/>
						</picture>
					</Link>
					<span className="relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5 text-center">
						Sen o rychlovlaku
					</span>
				</div>
			</div>
		</>
	);
};

export const LevTable = () => {
	return (
		<>
			<div class="overflow-x-auto relative rounded-lg">
				<table class="w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
					<thead class="text-sm text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300 bg-zinc-200">
						<tr>
							<th scope="col" class="py-3 px-6">
								Kategorie
							</th>
							<th scope="col" class="py-3 px-6">
								Maximální konstrukční rychlost (km/h)
							</th>
							<th scope="col" class="py-3 px-6">
								Maximální celková váha (kg)
							</th>
							<th scope="col" class="py-3 px-6">
								Maximální výkon
							</th>
							<th scope="col" class="py-3 px-6">
								Maximální rozměry: l x w x h (m)
							</th>
							<th scope="col" class="py-3 px-6">
								Počet přepravovaných osob
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class="dark:bg-zinc-800 border-zinc-700 bg-zinc-100">
							<th
								scope="row"
								class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50"
							>
								{"1a. elektrokolo s pedály < 55 kg"}
							</th>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								≤ 25
							</td>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								200
							</td>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								250 W
							</td>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								2 kola: 3 x 0,75 x 2 / {"> 2 kola:3 x 1 x 2"}
							</td>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								1 řidič + maximálně 2 spolujezdci
							</td>
						</tr>
						<tr class="dark:bg-zinc-800 border-zinc-700 bg-zinc-100">
							<th
								scope="row"
								class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50"
							>
								1b. všechna LEV jiná než 1a.
							</th>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								≤ 25
							</td>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								140
							</td>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								-
							</td>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								2 x 0,75 x 1,5
							</td>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								1 řidič
							</td>
						</tr>
						<tr class="dark:bg-zinc-800 border-zinc-700 bg-zinc-100">
							<th
								scope="row"
								class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50"
							>
								{"2a. Přeprava zboží > 55kg"}
							</th>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								≤ 25
							</td>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								556
							</td>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								-
							</td>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								3 x 1 x 2
							</td>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								1 řidič
							</td>
						</tr>
						<tr class="dark:bg-zinc-800 border-zinc-700 bg-zinc-100">
							<th
								scope="row"
								class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50"
							>
								{"2b.  Přeprava osob > 55kg"}
							</th>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								≤ 25
							</td>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								556
							</td>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								-
							</td>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								3 x 1 x 2
							</td>
							<td class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50">
								1 řidič + maximálně 8 spolujezdců
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export const DefinedCaption = ({ children }) => {
	return (
		<div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 pb-4 text-center italic w-full">
			{children}
		</div>
	);
};

export const RozdeleniKolobezek = () => {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
				<div className="w-full flex flex-col items-center justify-center">
					<div className="flex flex-col w-[230px] h-[350px] relative rounded-lg items-center justify-center bg-black">
						<picture className="rounded-xl z-[1]">
							<Image
								src={"/assets/images/lev/mestska-kolobezka.webp"}
								fill
								className={"rounded-lg object-cover"}
								alt={"Městská koloběžka"}
							/>
						</picture>
					</div>
					<DefinedCaption>
						Obr. 11 Městská
						<br />
						elektrokoloběžka&nbsp;
						<Citation href="/lev/zdroje#alza-elektricke-kolobezky">
							[25]
						</Citation>
						.
					</DefinedCaption>
				</div>
				<div className="w-full flex flex-col items-center justify-center">
					<div className="flex flex-col w-[230px] h-[350px] relative rounded-lg items-center justify-center bg-black">
						<picture className="rounded-xl z-[1]">
							<Image
								src={"/assets/images/lev/terenni-kolobezka.webp"}
								fill
								className={"rounded-lg object-cover"}
								alt={"Městská koloběžka"}
							/>
						</picture>
					</div>
					<DefinedCaption>
						Obr. 12 Terénní
						<br />
						elektrokoloběžka&nbsp;
						<Citation href="/lev/zdroje#alza-elektricke-kolobezky">
							[25]
						</Citation>
						.
					</DefinedCaption>
				</div>
				<div className="w-full flex flex-col items-center justify-center">
					<div className="flex flex-col w-[230px] h-[350px] relative rounded-lg items-center justify-center bg-black">
						<picture className="rounded-xl z-[1]">
							<Image
								src={"/assets/images/lev/chopper-kolobezka.webp"}
								fill
								className={"rounded-lg object-cover"}
								alt={"Městská koloběžka"}
							/>
						</picture>
					</div>
					<DefinedCaption>
						Obr. 13 Chopper
						<br />
						elektrokoloběžka&nbsp;
						<Citation href="/lev/zdroje#amazon-chopper">[26]</Citation>.
					</DefinedCaption>
				</div>
			</div>
		</>
	);
};
