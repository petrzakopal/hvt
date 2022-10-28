import { DefaultLayout } from "../../components/layout";

import {
	SpaceY,
	SourceBlock,
	SourceWrapper,
} from "../../components/utilities/utilities";

export const metaData = {
	meta_title:
		"Zdroje pro zpracování problematiky historie vlakové dopravy - elmobilita.cz", // meta_title
	meta_description:
		"Z jakých zdrojů bylo čerpáno při zpracování on-line webové prezentace týkající se historie vlakové dopravy na elmobilita.cz.", // meta_description
	canonical_url: "https://elmobilita.cz/vlak/zdroje", // canonical url
	og_type: "website", //og:type
	og_url: "https://elmobilita.cz/vlak/zdroje", //og_url
	og_image: "https://elmobilita.cz/assets/images/seo/og-image.png", // og_image
	og_title:
		"Zdroje pro zpracování problematiky historie vlakové dopravy - elmobilita.cz", // og_title
	og_description:
		"Z jakých zdrojů bylo čerpáno při zpracování on-line webové prezentace týkající se historie vlakové dopravy na elmobilita.cz", // og_description
	twitterImage: "https://elmobilita.cz/assets/images/seo/og-image.png", // twitte:image
	twitterDescription:
		"Z jakých zdrojů bylo čerpáno při zpracování on-line webové prezentace týkající se historie vlakové dopravy na elmobilita.cz", // twitter:description
	twitterTitle:
		"Zdroje pro zpracování problematiky historie vlakové dopravy - elmobilita.cz", // twitter:title
};

const schema = {};

function Index() {
	return (
		<>
			<SourceWrapper>
				<SourceBlock
					icon={<span className="text-primary-accent">[1]</span>}
					name={
						"OKLEŠŤKOVÁ, Pavla. Prostorová expanze systémů vysokorychlostní železniční dopravy v Evropě [online]. Brno, 2006 [cit. 2022-10-26]. Dostupné z: https://is.muni.cz/th/pg3dr/PavlaOklestkova.pdf. Bakalářská práce. Masarykova univerzita, Přírodovědecká fakulta. Vedoucí práce Daniel SEIDENGLANZ."
					}
					id="oklestova-prostorova-expanze"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[2]</span>}
					name={
						"Železnice. In: Wikipedia: the free encyclopedia [online]. San Francisco (CA): Wikimedia Foundation, 2001 [cit. 2022-10-26]. Dostupné z: https://cs.wikipedia.org/wiki/%C5%BDeleznice"
					}
					id="wikipedia-zeleznice"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[3]</span>}
					name={
						"Železniční doprava. In: Wikipedia: the free encyclopedia [online]. San Francisco (CA): Wikimedia Foundation, 2001 [cit. 2022-10-26]. Dostupné z: https://cs.wikipedia.org/wiki/%C5%BDelezni%C4%8Dn%C3%AD_doprava"
					}
					id="wikipedia-zeleznicni-doprava"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[4]</span>}
					name={
						"MOLEK, Tomáš. Elektrifikace českých železnic. In: O energetive [online]. [cit. 2022-10-26]. Dostupné z: https://oenergetice.cz/technologie/elektrifikace-ceskych-zeleznic"
					}
					id="molek-elektrifikace"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[5]</span>}
					name={
						"MAREK, Jiří. Zápisky z předmětu Základy elektrických pohonů a trakce. Praha ČVUT, 2020. Poznámky. ČVUT FEL."
					}
					id="marek-zapisky"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[6]</span>}
					name={
						"MAJDA, František. Elektrifikace železnic [online]. 2 [cit. 2022-10-26]. Dostupné z: http://www.odbornecasopisy.cz/res/pdf/44573.pdf"
					}
					id="majda-elektrifikace"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[7]</span>}
					name={
						"ŠEJDOVÁ, Magdalena. Vysokorychlostní tratě v Evropě - historie, současnost, budoucnost z pohledu hospodářské politiky [online]. Brno, 2015 [cit. 2022-10-26]. Dostupné z: https://is.muni.cz/th/bb3n8/DPsejdova.pdf. Diplomová práce. Masarakova univerzita, Ekonomicko-správní fakulta. Vedoucí práce Tomáš Paleta."
					}
					id="sejdova-vysokorychlostni-trate-v-eu"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[8]</span>}
					name={
						"Vysokorychlostní trať. In: Wikipedia: the free encyclopedia [online]. San Francisco (CA): Wikimedia Foundation, 2001 [cit. 2022-10-26]. Dostupné z: https://cs.wikipedia.org/wiki/Vysokorychlostn%C3%AD_tra%C5%A5"
					}
					id="wikipedia-vysokorychlostni-trat"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[9]</span>}
					name={
						"POKORNÝ, Bohumil. UVEDENÍ DO PROBLEMATIKY VYSOKORYCHLOSTNÍ ŽELEZNIČNÍ DOPRAVY. Czech-Raildays [online]. 2008(11), 27 [cit. 2022-10-26]. Dostupné z: https://www.czech-raildays.cz/2008/seminare/v1_1.pdf"
					}
					id="pokorny-uvedeni-do-problematiky-vysokorychlostni-dopravy"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[10]</span>}
					name={
						"Škoda řady 263. In: Atlas lokomotiv [online]. [cit. 2022-10-26]. Dostupné z: http://www.atlaslokomotiv.net/loko-263.html"
					}
					id="atlaslokomotiv-skoda-263"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[11]</span>}
					name={
						"Škoda řady 163,162. In: Atlas lokomotiv [online]. [cit. 2022-10-26]. Dostupné z: http://www.atlaslokomotiv.net/loko-163.html"
					}
					id="atlaslokomotiv-skoda-163-162"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[12]</span>}
					name={
						"Škoda řady 380 - atlas. In: Atlas lokomotiv [online]. [cit. 2022-10-26]. Dostupné z: http://www.atlaslokomotiv.net/loko-380.html"
					}
					id="atlaslokomotiv-skoda-380"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[13]</span>}
					name={
						"Siemens Velaro. In: Wikipedia: the free encyclopedia [online]. San Francisco (CA): Wikimedia Foundation, 2001 [cit. 2022-10-26]. Dostupné z: https://en.wikipedia.org/wiki/Siemens_Velaro"
					}
					id="wikipedia-siemens-velaro"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[14]</span>}
					name={
						"Siemens Velaro brochure. In: Siemens Mobility [online]. s. 24 [cit. 2022-10-26]. Dostupné z: https://assets.new.siemens.com/siemens/assets/api/uuid:f8bb84ab18e118497745eb3d7221e0ce7c2d1b9b/siemens-mobility-velaro-brochure-en.pdf"
					}
					id="siemens-brochure-velaro"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[15]</span>}
					name={
						"Siemens Velaro E for RENFE. In: Siemens Mobility [online]. s. 4 [cit. 2022-10-26]. Dostupné z: https://assets.new.siemens.com/siemens/assets/api/uuid:b546889f-1ed4-41ff-8042-cc4af5bba79c/siemens-mobility-velaro-e-datasheet-en.pdf"
					}
					id="siemens-mobility-velaro"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[16]</span>}
					name={
						"680, Pendolino. In: Atlas lokomotiv [online]. [cit. 2022-10-26]. Dostupné z: http://www.atlaslokomotiv.net/loko-680.html"
					}
					id="atlaslokomotiv-pendolino"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[17]</span>}
					name={
						"KADLEČÍK, Pavel. Možnosti využití programovatelných automatů Simatic řady S7-1200 od firmy Siemens. Zlín, 2017. Bakalářská práce. Univerzita Tomáše Bati ve Zlíně. Vedoucí práce Ing. Pavel Navrátil, Ph.D."
					}
					id="kadlecek-simatic"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[18]</span>}
					name={
						"Rozdělení trakce v Evropě, převzato z https://commons.wikimedia.org/wiki/File:Europe_rail_electrification_en.svg"
					}
					id="wikipedia-euro-rail"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[19]</span>}
					name={
						"Počty traťových kolejí, systémy trakčních proudových soustav a označení podle knižního jízdního řádu, převzato z http://www.ioda.cz/_mapy/map/mapaZ_koleje_trakce_2018.pdf"
					}
					id="ioda-mapa"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[20]</span>}
					name={
						"Mapa železničních tratí v Česku, převzato z https://commons.wikimedia.org/wiki/File:Map_of_Czech_railways.gif, původní zdroj: http://www.cdrail.cz/cp1250/sluzby/online/kjr_2005.gif"
					}
					id="cdrail-mapa"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[21]</span>}
					name={
						"Model výhradního využívání, zdroj: https://is.muni.cz/th/bb3n8/DPsejdova.pdf"
					}
					id="model-vyhradniho-vyuzivani"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[22]</span>}
					name={
						"Model smíšeného využívání, zdroj: https://is.muni.cz/th/bb3n8/DPsejdova.pdf"
					}
					id="model-smiseneho-vyuzivani"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[23]</span>}
					name={
						"Technické údaje lokomotivy Škoda řady S 499.2, zdroj: http://www.atlaslokomotiv.net/loko-263.html"
					}
					id="technicke-udaje-skoda-s499-2"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[24]</span>}
					name={
						"Lokomotiva Škoda řady S 499.2, zdroj: http://www.atlaslokomotiv.net/loko-263.html"
					}
					id="lokomotiva-skoda-s-499-2"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[25]</span>}
					name={
						"Technické údaje lokomotivy Škoda řady S 499.3, zdroj: http://www.atlaslokomotiv.net/loko-163.html"
					}
					id="technicke-udaje-skoda-s-499-2"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[26]</span>}
					name={
						"Lokomotiva Škoda řady S 499.3, zdroj: http://www.atlaslokomotiv.net/loko-163.html"
					}
					id="lokomotiva-skoda-s-499-2"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[27]</span>}
					name={
						"Technické údaje lokomotivy Škoda řady 380, zdroj: http://www.atlaslokomotiv.net/loko-380.html"
					}
					id="technicke-udaje-skoda-380"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[28]</span>}
					name={
						"Lokomotiva Škoda řady 380, zdroj: http://www.atlaslokomotiv.net/loko-380.html"
					}
					id="lokomotiva-skoda-380"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[29]</span>}
					name={
						"Technické údaje jednotky Siemens Velaro, zdroj: https://assets.new.siemens.com/siemens/assets/api/uuid:b546889f-1ed4-41ff-8042-cc4af5bba79c/siemens-mobility-velaro-e-datasheet-en.pdf"
					}
					id="technicke-udaje-siemens-velaro"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[30]</span>}
					name={
						"Trakční jednotka Simens Velaro, zdroj: https://en.wikipedia.org/wiki/Siemens_Velaro#/media/File:ICE_407_717_Stuttgart_Hbf_Endwagen_2.JPG"
					}
					id="trakcni-jednotka-siemens-velaro"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[31]</span>}
					name={
						"Technické údaje jednotky Alstom řady 680 Pendolino, zdroj: http://www.atlaslokomotiv.net/loko-680.html"
					}
					id="technicke-udaje-alstom-680-pendolino"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[32]</span>}
					name={
						"Trakční jednotka Asltom řady 680 Pendolino, zdroj: http://www.atlaslokomotiv.net/loko-680.html"
					}
					id="trakcni-jednotka-alstom-680-pendolino"
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
