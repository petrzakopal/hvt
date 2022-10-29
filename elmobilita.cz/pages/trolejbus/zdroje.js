import { DefaultLayout } from "../../components/layout";

import {
	SpaceY,
	SourceBlock,
	SourceWrapper,
} from "../../components/utilities/utilities";
import { PostFooterNavigation } from "../../components/post";

export const metaData = {
	meta_title:
		"Zdroje pro zpracování problematiky historie trolejbusů - elmobilita.cz", // meta_title
	meta_description:
		"Z jakých zdrojů bylo čerpáno při zpracování on-line webové prezentace týkající se historie trolejbusů na elmobilita.cz.", // meta_description
	canonical_url: "https://elmobilita.cz/trolejbus/zdroje", // canonical url
	og_type: "website", //og:type
	og_url: "https://elmobilita.cz/trolejbus/zdroje", //og_url
	og_image: "https://elmobilita.cz/assets/images/seo/og-image.png", // og_image
	og_title:
		"Zdroje pro zpracování problematiky historie trolejbusů - elmobilita.cz", // og_title
	og_description:
		"Z jakých zdrojů bylo čerpáno při zpracování on-line webové prezentace týkající se historie trolejbusů na elmobilita.cz", // og_description
	twitterImage: "https://elmobilita.cz/assets/images/seo/og-image.png", // twitte:image
	twitterDescription:
		"Z jakých zdrojů bylo čerpáno při zpracování on-line webové prezentace týkající se historie trolejbusů na elmobilita.cz", // twitter:description
	twitterTitle:
		"Zdroje pro zpracování problematiky historie trolejbusů - elmobilita.cz", // twitter:title
};

const schema = {};

function Index() {
	return (
		<>
			<SourceWrapper>
				<SourceBlock
					icon={
						<>
							<span
								className={`text-left w-fit text-primary-accent after:inline-flex  after:relative  hover:text-primary-accent after:transition-colors after:[mask:url("/assets/images/misc/external-link.svg")] after:[mask-repeat:no-repeat;] after:[content: "";] after:h-4 after:w-4 after:bg-primary-accent after:hover:bg-primary-accent after:[mask-size: cover;] after:top-[0.11em]`}
							>
								<span className="text-left justify-start">[1]</span>
							</span>
						</>
					}
					name={
						"Obrázek Das Electromote, převzato z pardubice.rozhlas.cz, původní zdroj: archiv DPMP"
					}
					linkName={
						"https://pardubice.rozhlas.cz/trolejbus-je-na-svete-135-let-6033543"
					}
					linkUrl={
						"https://pardubice.rozhlas.cz/trolejbus-je-na-svete-135-let-6033543"
					}
					id="rozhlas-electromote"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[2]</span>}
					name={
						"Trolejbus je na světě 135 let [online]. 2017 [cit. 2022-09-26]. Dostupné z: https://pardubice.rozhlas.cz/trolejbus-je-na-svete-135-let-6033543"
					}
					id="trolejbus-je-na-svete-135-let"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[3]</span>}
					name={
						"ŠKODA 1 TR [online]. 2009 [cit. 2022-09-26]. Dostupné z: https://trolejbus.webnode.sk/news/skoda-1-tr/"
					}
					id="skoda-1tr"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[4]</span>}
					name={
						"Pražská trolejbusová historie [online]. [cit. 2022-09-26]. Dostupné z: http://www.trolejbusyvpraze.net/tb_historie.htm"
					}
					id="tatra-t-400"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[5]</span>}
					name={
						"Dějiny trolejbusů v kostce: Nejednou těsně přežily svůj zánik, dnes jich jezdí stovky [online]. 2018 [cit. 2022-09-26]. Dostupné z: https://zpravy.aktualne.cz/domaci/historie-trolejbusu-v-kostce-nekolikrat-tesne-prezily-zanik/r~85af1d0c0aa711e9b9390cc47ab5f122/"
					}
					id="dejiny-trolejbusu-v-kostce"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[5]</span>}
					name={
						"Stručná historie trolejbusů [online]. ing. Ladislav Podivín [cit. 2022-09-26]. Dostupné z: http://www.trolejbus.cz/mesta/index.php?page=historie"
					}
					id="strucna-historie-trolejbusu"
				/>
			</SourceWrapper>
			<SpaceY mt={"mt-10"} />
			<PostFooterNavigation
				hrefPrevious="/trolejbus/historicky-vyvoj-trolejbusove-dopravy"
				hrefNext="/"
				next="Následující"
				previous="Předchozí"
				previousEnabled="true"
				nextEnabled="false"
			/>
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
