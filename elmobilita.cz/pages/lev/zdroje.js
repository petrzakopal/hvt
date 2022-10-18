import { DefaultLayout } from "../../components/layout";

import {
	SpaceY,
	SourceBlock,
	SourceWrapper,
} from "../../components/utilities/utilities";

export const metaData = {
	meta_title:
		"Zdroje pro zpracování problematiky historie lehkých elektrických vozidel - elmobilita.cz", // meta_title
	meta_description:
		"Z jakých zdrojů bylo čerpáno při zpracování on-line webové prezentace týkající se historie lehkých elektrických vozidel na elmobilita.cz.", // meta_description
	canonical_url: "https://elmobilita.cz/vlak/zdroje", // canonical url
	og_type: "website", //og:type
	og_url: "https://elmobilita.cz/vlak/zdroje", //og_url
	og_image: "https://elmobilita.cz/assets/images/seo/og-image.png", // og_image
	og_title:
		"Zdroje pro zpracování problematiky historie lehkých elektrických vozidel - elmobilita.cz", // og_title
	og_description:
		"Z jakých zdrojů bylo čerpáno při zpracování on-line webové prezentace týkající se historie lehkých elektrických vozidel na elmobilita.cz", // og_description
	twitterImage: "https://elmobilita.cz/assets/images/seo/og-image.png", // twitte:image
	twitterDescription:
		"Z jakých zdrojů bylo čerpáno při zpracování on-line webové prezentace týkající se historie lehkých elektrických vozidel na elmobilita.cz", // twitter:description
	twitterTitle:
		"Zdroje pro zpracování problematiky historie lehkých elektrických vozidel - elmobilita.cz", // twitter:title
};

const schema = {};

function Index() {
	return <></>;
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
