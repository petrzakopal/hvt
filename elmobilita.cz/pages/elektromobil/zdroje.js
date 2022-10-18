import { DefaultLayout } from "../../components/layout";

import {
	SpaceY,
	SourceBlock,
	SourceWrapper,
} from "../../components/utilities/utilities";

export const metaData = {
	meta_title:
		"Zdroje pro zpracování problematiky historie elektroautomobilů - elmobilita.cz", // meta_title
	meta_description:
		"Z jakých zdrojů bylo čerpáno při zpracování on-line webové prezentace týkající se historie elektroautomobilů na elmobilita.cz.", // meta_description
	canonical_url:
		"https://elmobilita.cz/elektromobil/detailni-historie-elektroautomobilu", // canonical url
	og_type: "website", //og:type
	og_url:
		"https://elmobilita.cz/elektromobil/detailni-historie-elektroautomobilu", //og_url
	og_image: "https://elmobilita.cz/assets/images/seo/og-image.png", // og_image
	og_title:
		"Zdroje pro zpracování problematiky historie elektroautomobilů - elmobilita.cz", // og_title
	og_description:
		"Z jakých zdrojů bylo čerpáno při zpracování on-line webové prezentace týkající se historie elektroautomobilů na elmobilita.cz", // og_description
	twitterImage: "https://elmobilita.cz/assets/images/seo/og-image.png", // twitte:image
	twitterDescription:
		"Z jakých zdrojů bylo čerpáno při zpracování on-line webové prezentace týkající se historie elektroautomobilů na elmobilita.cz", // twitter:description
	twitterTitle:
		"Zdroje pro zpracování problematiky historie elektroautomobilů - elmobilita.cz", // twitter:title
};

const schema = {};

function Index() {
	return (
		<>
			<SourceWrapper>
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
								<span className="text-left justify-start">[3]</span>
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
