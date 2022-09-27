import { DefaultLayout } from "../components/layout";
import { TextLink } from "../components/links";
import Image from "next/image";
import {
	FirstHeadingProperties,
	FourthHeadingProperties,
	SecondHeadingProperties,
} from "../components/headings";
import Link from "next/link";
import { SpaceY } from "../components/utilities/utilities";

const metaData = {
	meta_title: "elmobilita – Historie elektromobility", // meta_title
	meta_description:
		"Historie elektromobility v kostce. Nejzajímavější informace na jednom místě.", // meta_description
	canonical_url: "https://elmobilita.cz", // canonical url
	og_type: "website", //og:type
	og_url: "https://elmobilita.cz", //og_url
	og_image: "https://elmobilita.cz/assets/images/seo/og-image.png", // og_image
	og_title: "elmobilita – Historie elektromobility", // og_title
	og_description:
		"Historie elektromobility v kostce. Nejzajímavější informace na jednom místě.", // og_description
	twitterImage: "https://elmobilita.cz/assets/images/seo/og-image.png", // twitte:image
	twitterDescription:
		"Historie elektromobility v kostce. Nejzajímavější informace na jednom místě.", // twitter:description
	twitterTitle: "elmobilita – Historie elektromobility", // twitter:title
};

const schema = {};

function Index() {
	return (
		<>
			<SpaceY mt={"mt-10"} />
			<SourceWrapper>
				<SourceBlock
					icon={
						<span
							className={`text-left w-fit text-primary-accent after:inline-flex  after:relative  hover:text-primary-accent after:transition-colors after:[mask:url("/assets/images/misc/external-link.svg")] after:[mask-repeat:no-repeat;] after:[content: "";] after:h-4 after:w-4 after:bg-primary-accent after:hover:bg-primary-accent after:[mask-size: cover;] after:top-[0.11em]`}
						></span>
					}
					name={"Obrázek elektromobilu na hlavní stránce"}
					linkName={
						"https://tesla-cdn.thron.com/delivery/public/image/tesla/5a7b3001-249f-4065-a330-4ea6a17ccf7b/bvlatuR/std/2560x1708/Model-3-Main-Hero-Desktop-LHD"
					}
					linkUrl={
						"https://tesla-cdn.thron.com/delivery/public/image/tesla/5a7b3001-249f-4065-a330-4ea6a17ccf7b/bvlatuR/std/2560x1708/Model-3-Main-Hero-Desktop-LHD"
					}
				/>
				<SourceBlock
					icon={
						<span
							className={`text-left w-fit text-primary-accent after:inline-flex  after:relative  hover:text-primary-accent after:transition-colors after:[mask:url("/assets/images/misc/external-link.svg")] after:[mask-repeat:no-repeat;] after:[content: "";] after:h-4 after:w-4 after:bg-primary-accent after:hover:bg-primary-accent after:[mask-size: cover;] after:top-[0.11em]`}
						></span>
					}
					name={"Obrázek vlaku na hlavní stránce"}
					linkName={
						"https://lokomotivy.net/zobraz2.php?rada=r163&loko=8201&bg=12"
					}
					linkUrl={
						"https://lokomotivy.net/zobraz2.php?rada=r163&loko=8201&bg=12"
					}
				/>
				<SourceBlock
					icon={
						<span
							className={`text-left w-fit text-primary-accent after:inline-flex  after:relative  hover:text-primary-accent after:transition-colors after:[mask:url("/assets/images/misc/external-link.svg")] after:[mask-repeat:no-repeat;] after:[content: "";] after:h-4 after:w-4 after:bg-primary-accent after:hover:bg-primary-accent after:[mask-size: cover;] after:top-[0.11em]`}
						></span>
					}
					name={"Obrázek LEV na hlavní stránce"}
					linkName={
						"https://www.itmix.cz/wp-content/uploads/2021/10/elektricka-kolobezka-xiaomi-mi-scooter-3_2.jpg"
					}
					linkUrl={
						"https://www.itmix.cz/wp-content/uploads/2021/10/elektricka-kolobezka-xiaomi-mi-scooter-3_2.jpg"
					}
				/>
				<SourceBlock
					icon={
						<span
							className={`text-left w-fit text-primary-accent after:inline-flex  after:relative  hover:text-primary-accent after:transition-colors after:[mask:url("/assets/images/misc/external-link.svg")] after:[mask-repeat:no-repeat;] after:[content: "";] after:h-4 after:w-4 after:bg-primary-accent after:hover:bg-primary-accent after:[mask-size: cover;] after:top-[0.11em]`}
						></span>
					}
					name={"Obrázek trolejbusu na hlavní stránce"}
					linkName={"http://www.fotodoprava.com/images_mhd_v2/usti558v.jpg"}
					linkUrl={"http://www.fotodoprava.com/images_mhd_v2/usti558v.jpg"}
				/>
			</SourceWrapper>
		</>
	);
}

export default Index;

Index.getLayout = function getLayout(page) {
	return (
		<>
			<DefaultLayout metaData={metaData} schema={schema}>
				{page}
			</DefaultLayout>
		</>
	);
};

const SourceBlock = ({ icon, name, linkName, linkUrl }) => {
	return (
		<>
			<div className="w-full flex flex-row">
				<span className="mr-2 text-zinc-600 dark:text-zinc-600 text-base">
					{icon}
				</span>
				<div className=" text-left w-full grid grid-cols-1">
					<p className="text-zinc-600 dark:text-zinc-600 text-base">{name}</p>
					<p className="text-zinc-900 dark:text-zinc-50 italic text-lg">
						<Link href={linkUrl}>
							<a rel="external" target={"_blank"} className={"break-all"}>
								{linkName}
							</a>
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

const SourceWrapper = ({ children }) => {
	return (
		<>
			<div className="grid grid-cols-1 gap-y-5">{children}</div>
		</>
	);
};
