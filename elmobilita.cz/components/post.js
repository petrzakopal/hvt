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
		<div class="relative video-image-link flex flex-col items-center justify-center mx-auto rounded-xl ml-[-3vw] w-[calc(100%+6vw] h-80 group cursor-pointer my-5">
			<PlayIcon className="absolute w-24 h-24 z-[2]" />
			{/* {children} */}
			<Link href={linkUrl}>
				<a rel={rel} target={target}>
					<picture className="rounded-xl z-[1]">
						<Image
							src={imageUrl}
							layout={"fill"}
							objectFit={"cover"}
							className={
								"rounded-lg opacity-50 saturate-0 group-hover:md:animate-breathe transition-all ease-in-out"
							}
							alt={alt}
							priority
						/>
					</picture>
				</a>
			</Link>
		</div>
	);
};
