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

				<SourceBlock
					icon={<span className="text-primary-accent">[1]</span>}
					name={
						"ANDERSON, Curtis D. a Judy ANDERSON. Electric and Hybrid Cars: A History. Jefferson: McFarland & Company, Incorporated Publishers, 2010. ISBN 0786433019;9780786433018;"
					}
					id="anderson-electric-and-hybrid-cars"
				/>

				<SourceBlock
					icon={
						<>
							<span
								className={`text-left w-fit text-primary-accent after:inline-flex  after:relative  hover:text-primary-accent after:transition-colors after:[mask:url("/assets/images/misc/external-link.svg")] after:[mask-repeat:no-repeat;] after:[content: "";] after:h-4 after:w-4 after:bg-primary-accent after:hover:bg-primary-accent after:[mask-size: cover;] after:top-[0.11em]`}
							>
								<span className="text-left justify-start">[2]</span>
							</span>
						</>
					}
					name={"Obrázek Vývoje Pneumatik / Automobiloých kol"}
					linkName={"https://getblogo.com/car-tire-history/"}
					linkUrl={"https://getblogo.com/car-tire-history/"}
					id="getblogo-car-tire-history"
				/>
				<SourceBlock
					icon={
						<>
							<span
								className={`text-left w-fit text-primary-accent after:inline-flex  after:relative  hover:text-primary-accent after:transition-colors after:[mask:url("/assets/images/misc/external-link.svg")] after:[mask-repeat:no-repeat;] after:[content: "";] after:h-4 after:w-4 after:bg-primary-accent after:hover:bg-primary-accent after:[mask-size: cover;] after:top-[0.11em]`}
							>
								<span className="text-left justify-start">[2]</span>
							</span>
						</>
					}
					name={"Obrázek Enfield 8000"}
					linkName={"https://commons.wikimedia.org/wiki/File:HYDE_PARK.JPG"}
					linkUrl={"https://commons.wikimedia.org/wiki/File:HYDE_PARK.JPG"}
					id="wikipedia-enfield"
				/>

				<SourceBlock
					icon={
						<span
							className={`text-left w-fit text-primary-accent after:inline-flex  after:relative  hover:text-primary-accent after:transition-colors after:[mask:url("/assets/images/misc/external-link.svg")] after:[mask-repeat:no-repeat;] after:[content: "";] after:h-4 after:w-4 after:bg-primary-accent after:hover:bg-primary-accent after:[mask-size: cover;] after:top-[0.11em]`}
						>
							<span className="text-left justify-start">[4]</span>
						</span>
					}
					name={"Tesla, Inc. Wikipedia The Free Encyclopedia"}
					linkName={"https://en.wikipedia.org/wiki/Tesla,_Inc."}
					linkUrl={"https://en.wikipedia.org/wiki/Tesla,_Inc."}
					id="wikipedia-tesla"
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
