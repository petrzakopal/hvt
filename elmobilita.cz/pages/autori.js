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
import { PersonCard } from "../components/utilities/utilities";

const metaData = {
	meta_title: "Autoři a přispěvatelé obsahu projektu elmobilita.cz", // meta_title
	meta_description:
		"Historie elektromobility v kostce. Nejzajímavější informace na jednom místě.", // meta_description
	canonical_url: "https://elmobilita.cz/autori", // canonical url
	og_type: "website", //og:type
	og_url: "https://elmobilita.cz/autori", //og_url
	og_image: "https://elmobilita.cz/assets/images/seo/og-image.png", // og_image
	og_title: "Autoři a přispěvatelé obsahu projektu elmobilita.cz", // og_title
	og_description:
		"Historie elektromobility v kostce. Nejzajímavější informace na jednom místě.", // og_description
	twitterImage: "https://elmobilita.cz/assets/images/seo/og-image.png", // twitte:image
	twitterDescription:
		"Historie elektromobility v kostce. Nejzajímavější informace na jednom místě.", // twitter:description
	twitterTitle: "Autoři a přispěvatelé obsahu projektu elmobilita.cz", // twitter:title
};

const schema = {};

function Index() {
	return (
		<>
			<div className="w-full text-left flex flex-col">
				<span className={`text-left text-zinc-600 dark:text-zinc-200`}>
					Dobrý den,
				</span>
				<span
					className={`text-left ${FourthHeadingProperties} flex md:flex-row flex-row items-center`}
				>
					tak tohle jsme my{" "}
					<span className="text-5xl animate-wave">👋🏻</span>
				</span>
			</div>

			<SpaceY mt={"mt-10"} />
			<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 items-center justify-center justify-items-center">
				<PersonCard
					name={"Petr Zakopal"}
					image="/assets/images/misc/zakopal.webp"
					socialUrl={"https://twitter.com/petr_zakopal"}
					socialTag="@petr_zakopal"
				/>
				<PersonCard
					name={"Jakub Kučera"}
					image="/assets/images/misc/kucera.webp"
					socialUrl={"https://www.linkedin.com/in/jakub-ku%C4%8Dera-49682421a/"}
					socialTag="@jakub-kucera"
				/>
				<PersonCard
					name={"Petr Janoušek"}
					image="/assets/images/misc/janousek.webp"
					socialUrl={
						"https://www.linkedin.com/in/petr-janou%C5%A1ek-1b7215217/"
					}
					socialTag="@petr-janousek"
				/>
				<PersonCard
					name={"Jiří Marek"}
					image="/assets/images/misc/marek.webp"
					socialUrl={"https://www.instagram.com/panjiri_marek/"}
					socialTag="@jiri-marek"
				/>
				<PersonCard
					name={"Dominik Sochulák"}
					image="/assets/images/misc/sochulak.webp"
					socialUrl={
						"https://www.linkedin.com/in/dominik-sochul%C3%A1k-a719011b7/"
					}
					socialTag="@dominik-sochulak"
				/>
				<PersonCard
					name={"Jaroslav Šlajcher"}
					image="/assets/images/misc/profile-placeholder.webp"
					socialUrl={"#void"}
					socialTag="@jaroslav-slajcher"
				/>
				<PersonCard
					name={"Miroslav Suchý"}
					image="/assets/images/misc/profile-placeholder.webp"
					socialUrl={"#void"}
					socialTag="@miroslav-suchy"
				/>
				<PersonCard
					name={"Michel Jabali"}
					image="/assets/images/misc/jabali.webp"
					socialUrl={"https://www.linkedin.com/in/michel-jabali-552596152/"}
					socialTag="@michel-jabali"
				/>
			</div>
			<SpaceY mt={"mt-10"} />
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
