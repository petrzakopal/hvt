import Link from "next/link";

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
								<Link href={linkUrl}>
									<a rel="external" target={"_blank"} className={"break-all"}>
										{linkName}
									</a>
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
