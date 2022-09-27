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
			<div className="w-full text-left flex flex-col">
				<span className={`text-left text-zinc-600 dark:text-zinc-200`}>
					Dobrý den,
				</span>
				<span
					className={`text-left ${FourthHeadingProperties} flex md:flex-row flex-col`}
				>
					vyberte téma elektromobility o které máte zájem{" "}
					<span className="text-3xl animate-bounce-10">👇🏻</span>
				</span>
			</div>

			<SpaceY mt={"mt-10"} />
			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-5 items-center justify-center justify-items-center">
				<GroupSection
					linkName={"Vlaky"}
					linkUrl={"/vlak"}
					imageUrl={"/assets/images/kategorie/vlaky.webp"}
				/>
				<GroupSection
					linkName={"Autobusy"}
					linkUrl={"/autobus"}
					imageUrl={"/assets/images/kategorie/autobusy.webp"}
				/>
				<GroupSection
					linkName={"Elektromobily"}
					linkUrl={"/elektromobil"}
					imageUrl={"/assets/images/kategorie/elektromobily.webp"}
				/>
				<GroupSection
					linkName={"LEV"}
					linkUrl={"/lev"}
					imageUrl={"/assets/images/kategorie/lev.webp"}
				/>
			</div>
			<SpaceY mt={"mt-10"} />
			<p className="italic text-sm text-zinc-600 dark:text-zinc-600">
				Omluvte prosím sníženou kvalitu webových stránek. Stránky jsou ve
				výstavbě v rámci semestrální práce předmětu B0M16HVT.{" "}
			</p>
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
				<a>
					<div className="group flex flex-col w-80 h-80 relative rounded-lg items-center justify-center bg-black">
						<h2
							className={`z-[4] opacity-100 relative lg:text-4xl text-3xl text-zinc-50 dark:text-zinc-50 font-bold text-left group-hover:md:flex md:hidden transition-all ease-in-out duration-1000`}
						>
							{linkName}
						</h2>
						<picture className="peer bg-black transition-all ease-in-out z-[1]">
							<Image
								src={imageUrl}
								layout={"fill"}
								objectFit={"cover"}
								className={
									"rounded-lg group-hover:md:animate-breathe opacity-50 md:opacity-100 transition-all ease-in-out"
								}
								alt={""}
								priority
							/>
						</picture>
					</div>
				</a>
			</Link>
		</>
	);
};
