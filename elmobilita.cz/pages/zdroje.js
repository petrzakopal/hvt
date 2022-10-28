import { DefaultLayout } from "../components/layout";
import { TextLink } from "../components/links";
import Image from "next/image";
import {
	FirstHeadingProperties,
	FourthHeadingProperties,
	SecondHeadingProperties,
} from "../components/headings";
import Link from "next/link";
import {
	SpaceY,
	SourceBlock,
	SourceWrapper,
} from "../components/utilities/utilities";
import { Shows } from "../components/post";

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
			<h2 className={`${SecondHeadingProperties} text-left w-full`}>
				Doporučované on-line zdroje
			</h2>
			<SpaceY mt={"mt-10"} />
			<Shows />
			<SpaceY mt={"mt-14"} />
			<h2 className={`${SecondHeadingProperties} text-left w-full`}>
				Zdroje jednotlivých kategorií
			</h2>
			<SpaceY mt={"mt-10"} />
			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-5 items-center justify-center justify-items-center">
				<GroupSection
					linkName={"Železniční doprava"}
					linkUrl={"/vlak/zdroje"}
					imageUrl={"/assets/images/kategorie/vlaky.webp"}
				/>
				<GroupSection
					linkName={"Trolejbusy"}
					linkUrl={"/trolejbus/zdroje"}
					imageUrl={"/assets/images/kategorie/autobusy.webp"}
				/>
				<GroupSection
					linkName={"Elektromobily"}
					linkUrl={"/elektromobil/zdroje"}
					imageUrl={"/assets/images/kategorie/elektromobily.webp"}
				/>
				<GroupSection
					linkName={"Lehká Elektrická Vozidla"}
					linkUrl={"/lev/zdroje"}
					imageUrl={"/assets/images/kategorie/lev.webp"}
				/>
			</div>
			<SpaceY mt={"mt-14"} />
			<h2 className={`${SecondHeadingProperties} text-left w-full`}>
				Obecný seznam zdrojů
			</h2>
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

const GroupSection = ({ linkUrl, linkName, imageUrl }) => {
	return (
		<>
			<Link href={linkUrl}>
				<div className="group flex flex-col w-80 h-80 relative rounded-lg items-center justify-center bg-black">
					<h2
						className={`z-[4] opacity-100 relative lg:text-4xl text-3xl text-zinc-50 dark:text-zinc-50 font-bold text-center flex transition-all ease-in-out duration-1000`}
					>
						{linkName}
					</h2>
					<picture className="peer bg-black transition-all ease-in-out z-[1]">
						<Image
							src={imageUrl}
							fill
							className={
								"rounded-lg group-hover:md:animate-breathe opacity-50 transition-all ease-in-out object-cover"
							}
							alt={""}
							priority
						/>
					</picture>
				</div>
			</Link>
		</>
	);
};
