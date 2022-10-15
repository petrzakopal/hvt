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
			FactDesign = "bg-primary-accent/30 border-2 border-primary-accent";
			ToolTipDesign = "border-[1px] border-zinc-50";
			break;

		case "secondary":
			FactDesign = "bg-secondary-accent/30 border-2 border-secondary-accent";
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
