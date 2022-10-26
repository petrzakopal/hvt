import Link from "next/link";
import { LinkProperties } from "../links";
import Image from "next/image";

export const SpaceY = ({ mt }) => {
	return <span aria-hidden={"true"} className={`spacer ${mt}`}></span>;
};

export const SourceBlock = ({ icon, name, linkName, linkUrl, id }) => {
	return (
		<>
			<div className="w-full flex flex-row" id={id}>
				<span className="w-5 mr-2 text-zinc-600 dark:text-zinc-600 text-base justify-items-start flex flex-col">
					{icon}
				</span>
				<div className=" text-left w-full grid grid-cols-1">
					<p className="text-zinc-900 dark:text-zinc-50 text-base">{name}</p>

					{linkUrl ? (
						<>
							<p className=" italic text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-50 hover:text-zinc-900 transition-colors ease-in-out text-lg">
								<Link
									href={linkUrl}
									rel="external"
									target={"_blank"}
									className={"break-all"}
								>
									{linkName}
								</Link>
							</p>
						</>
					) : (
						""
					)}
				</div>
			</div>
		</>
	);
};

export const SourceWrapper = ({ children }) => {
	return (
		<>
			<div className="grid grid-cols-1 gap-y-5">{children}</div>
		</>
	);
};

/**
 * @version 0.1
 * Documentation for component PersonCard
 * -------------------------------------------------------------------------------
 * name -> desired card name heading - example: "Foo Bar"
 * position -> position of person - example: "Lorem Ipsum"
 * gradient -> gradient of the heading - example: "bg-BlueToGreenGradient"
 * image -> profile image of person - link or static import is acceptable - example: "/assets/images/profile_pic.webp"
 * socialUrl -> url of a social link for persons tag - example: "https://foo.bar"
 * socialTag -> spocial tag of a person - example: "@foo.bar"
 */

export const PersonCard = ({ name, position, image, socialUrl, socialTag }) => {
	return (
		<div className="grid gap-2 grid-cols-1 w-full justify-start justify-items-center items-center text-center">
			{/* <div className="grid gap-1">
				<h4
					className={`text-center text-xl font-bold bg-clip-text text-transparent ${gradient}`}
				>
					{name}
				</h4>
			</div> */}
			<Link href={socialUrl} className="relative flex">
				<picture className="w-[177px] h-[233px] relative">
					<Image
						src={image}
						fill
						sizes="50vw"
						// placeholder="blur" // only available when staticly importing file like import profilePic from "../public/assets/..."
						className="rounded-md object-cover"
					></Image>
				</picture>
			</Link>
			<div className="grid gap-1">
				<h4
					className={`text-center text-xl font-bold dark:text-zinc-50 text-zinc-900`}
				>
					{name}
				</h4>
				{position ? (
					<>
						<p className="text-center text-normal font-base dark:text-zinc-50 text-zinc-900">
							{position}
						</p>
					</>
				) : (
					""
				)}

				<Link
					href={socialUrl}
					className={`text-normal font-semibold transition-colors easy-in-out ${LinkProperties}`}
					target={"_blank"}
				>
					{socialTag}
				</Link>
			</div>
		</div>
	);
};
