import { DefaultLayout } from "../../components/layout";

import {
	SpaceY,
	SourceBlock,
	SourceWrapper,
} from "../../components/utilities/utilities";
import { PostFooterNavigation } from "../../components/post";

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
							<span className="text-primary-accent">[2]</span>
						</>
					}
					name={
						"Car Tire History. [vid. 2022-10-29]. Dostupné z: https://getblogo.com/car-tire-history/"
					}
					id="getblogo-car-tire-history"
				/>
				<SourceBlock
					icon={
						<>
							<span className="text-primary-accent">[3]</span>
						</>
					}
					name={
						"Enfield 8000. [vid. 2022-10-29]. Dostupné z: https://en.wikipedia.org/wiki/Enfield_8000"
					}
					id="wikipedia-enfield"
				/>

				<SourceBlock
					icon={
						<>
							<span className="text-primary-accent">[4]</span>
						</>
					}
					name={
						"Tesla, Inc. Wikipedia The Free Encyclopedia. [vid. 2022-10-29]. Dostupné z: https://en.wikipedia.org/wiki/Tesla,_Inc."
					}
					id="wikipedia-tesla"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[5]</span>}
					name={
						"Electrobat [online]. [vid. 2022-10-29]. Dostupné z: https://en.wikipedia.org/wiki/Electrobat"
					}
					id="wikipedia-electrobat"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[6]</span>}
					name={
						"EARTH DAY: Nissan built a hybrid-electric pickup back in 1973. [vid. 2022-10-29]. Dostupné z: https://japanesenostalgiccar.com/1973-nissan-ev4-electric-pickup/"
					}
					id="nissan-ev4"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[7]</span>}
					name={
						"Ford Ecostar 1992 photos. [vid. 2022-10-29]. Dostupné z: https://www.favcars.com/ford-ecostar-1992-photos-111840.htm"
					}
					id="ford-ecostar-1992"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[8]</span>}
					name={
						"General Motors EV1. [vid. 2022-10-29]. Dostupné z: https://www.favcars.com/ford-ecostar-1992-photos-111840.htm"
					}
					id="gm-ev1-1996"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[9]</span>}
					name={
						"2008 Tesla Roadster. [vid. 2022-10-29]. Dostupné z: https://carsandbids.com/auctions/3goZQ16P/2008-tesla-roadster"
					}
					id="tesla-roadster-2008"
				/>
			</SourceWrapper>
			<SpaceY mt={"mt-10"} />
			<PostFooterNavigation
				hrefPrevious="/elektromobil/technologie"
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
