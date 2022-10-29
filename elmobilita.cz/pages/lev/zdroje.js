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
	return (
		<>
			<SourceWrapper>
				<SourceBlock
					icon={<span className="text-primary-accent">[1]</span>}
					name={
						"nařízení Evropského parlamentu a Rady (EU) č. 168/2013 ze dne 15. ledna 2013 o schvalování dvoukolových nebo tříkolových vozidel a čtyřkolek a dozoru nad trhem s těmito vozidly [online]. [vid. 2022-10-18]. Dostupné z: https://eur-lex.europa.eu/legal-content/CS/TXT/PDF/?uri=CELEX:32013R0168&from=SV"
					}
					id="narizeni-eu-168-2013"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[2]</span>}
					name={
						"Light electric vehicles (LEVs) | SWOV [online]. [vid. 2022-10-18]. Dostupné z: https://swov.nl/en/fact-sheet/light-electric-vehicles-levs"
					}
					id="lev-swov"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[3]</span>}
					name={
						"Battery University [online]. [vid. 2022-10-18]. Dostupné z: https://batteryuniversity.com/"
					}
					id="battery-university"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[4]</span>}
					name={
						"Electric motor - Wikipedia [online]. [vid. 2022-10-24]. Dostupné z: https://en.wikipedia.org/wiki/Electric_motor"
					}
					id="wikipedia-electric-motor"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[5]</span>}
					name={
						"Michael Faraday, Inventor of the Electric Motor [online]. [vid. 2022-10-24]. Dostupné z: https://www.thoughtco.com/michael-faraday-inventor-4059933"
					}
					id="michael-faraday"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[6]</span>}
					name={
						"EV Tech info Motors [online]. [vid. 2022-10-24]. Dostupné z: https://www.evworks.com.au/page/technical-information/ev-tech-info/motors/"
					}
					id="dc-animace"
				/>

				<SourceBlock
					icon={<span className="text-primary-accent">[7]</span>}
					name={
						"THE HISTORY OF ELECTRIC MOTOR TECHNOLOGY: A JOURNEY THROUGH TIME | PCB Stator Technology [online]. [vid. 2022-10-24]. Dostupné z: https://pcbstator.com/news/history-electric-motor-technology-journey-through-time"
					}
					id="journey-through-time"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[8]</span>}
					name={
						"Faraday Motor – 1821 - MagLab [online]. [vid. 2022-10-24]. Dostupné z: https://nationalmaglab.org/education/magnet-academy/history-of-electricity-magnetism/museum/faraday-motor-1821"
					}
					id="maglab-faraday"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[9]</span>}
					name={
						"Nikola Tesla - Wikipedia [online]. [vid. 2022-10-24]. Dostupné z: https://en.wikipedia.org/wiki/Nikola_Tesla"
					}
					id="nikola-tesla"
				/>

				<SourceBlock
					icon={<span className="text-primary-accent">[10]</span>}
					name={
						"Motor Control Permanent Magnet Sync Motor (PMSM) | Farnell [online]. [vid. 2022-10-24]. Dostupné z: https://cz.farnell.com/motor-control-permanent-magnet-sync-motor-pmsm-technology"
					}
					id="pmsm"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[11]</span>}
					name={
						"Overview: Synchronous Motors (PMSM & BLDC) [online]. [vid. 2022-10-24]. Dostupné z: https://www.linkedin.com/pulse/overview-synchronous-motors-pmsm-bldc-deependra-thakur"
					}
					id="pmsms-overview"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[12]</span>}
					name={
						"KRAJÁNEK VLADIMÍR. Návrh synchronního motoru s permanentními magnety pro pohon elektromobilu [online]. nedatováno [vid. 2022-10-24]. Dostupné z: https://otik.zcu.cz/bitstream/11025/22898/1/Diplomova%20prace_Vladimir%20Krajanek.pdf"
					}
					id="krajanek-synchronni-motor"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[13]</span>}
					name={
						"Who Invented the Scooter? [online]. [vid. 2022-10-24]. Dostupné z: https://unagiscooters.com/eu/news/2020/12/08/who-invented-the-scooter/"
					}
					id="who-invented-the-scooter"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[14]</span>}
					name={
						"The Autoped Was the World's First Scooter [online]. [vid. 2022-10-29]. Dostupné z: https://www.treehugger.com/autoped-was-worlds-first-scooter-4858489who-invented-the-scooter/"
					}
					id="lada-norman"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[15]</span>}
					name={
						"Wim Ouboter And His Micro Mobility Units Story - Electric Scooter shop [online]. [vid. 2022-10-24]. Dostupné z: https://electric-scooter.shop/wim-ouboter-and-his-micro-mobility-units-story/?fbclid=IwAR3ODZpq8oGLjh4B1qrYl4XAEE9SppCjpY-pqPFbSl5y4aIupI7033F6VLA"
					}
					id="wim-ouboter-electric-scooter"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[16]</span>}
					name={
						"Electric Scooter History - Invention, Evolution & Innovations– fluidfreeride.com [online]. [vid. 2022-10-24]. Dostupné z: https://fluidfreeride.com/blogs/news/electric-scooters-history?fbclid=IwAR0nnzWqZZvLI2IxYf_BOP3l1T_7PUkC7XYobHh4KLkukjo-GIVP-wTZHIk"
					}
					id="electric-scooter-history"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[17]</span>}
					name={
						"Peugeot to unveil its all new electric e-Vivacity scooter [online]. [vid. 2022-10-29]. Dostupné z: https://ecofriend.com/peugeot-to-unveil-its-all-new-electric-e-vivacity-scooter.html"
					}
					id="scoot-elec"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[18]</span>}
					name={
						"The History of Electric Scooters [online]. [vid. 2022-10-24]. Dostupné z: https://www.linkedin.com/pulse/history-electric-scooters-prashant-dedhia-negotiation-ninja-?fbclid=IwAR1J7hC5xbfY1YdIhHf7NhSVbQYtHVh3YisfgBQIdgUP3jTTy81N0sVqd8A"
					}
					id="history-electric-scooters"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[19]</span>}
					name={
						"Electric Scooter History—How It All Started | Apollo Scooters [online]. [vid. 2022-10-24]. Dostupné z: https://apolloscooters.co/blogs/news/electric-scooter-history-how-it-all-started?fbclid=IwAR1GFP1NWNHcXODORvDvLSlRnJzNDPEhdpJJC9Shhxfg6IcX_rEVUhivvYk"
					}
					id="apolloscooters-electric-scooter-history"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[20]</span>}
					name={
						"RAZOR SCOOTER timeline | Timetoast timelines [online]. [vid. 2022-10-24]. Dostupné z: https://www.timetoast.com/timelines/razor-scooter?fbclid=IwAR3GLlnFJ96jj6UpqMBNaKWiew8X7pr6KDPdNFZYDu363yVzHV7P_chKOk8"
					}
					id="razor-scooter-timeline"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[21]</span>}
					name={
						"MyWay - a cool ultraportable electric scooter [online]. [vid. 2022-10-24]. Dostupné z: https://www.ubergizmo.com/2011/09/myway/"
					}
					id="myway-scooter"
				/>

				<SourceBlock
					icon={<span className="text-primary-accent">[22]</span>}
					name={
						"Lithium-ion Battery Costs and Market [online]. [vid. 2022-10-24]. Dostupné z: https://data.bloomberglp.com/bnef/sites/14/2017/07/BNEF-Lithium-ion-battery-costs-and-market.pdf"
					}
					id="bloomberglp-lithium-battery-costs"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[23]</span>}
					name={
						"What Were The First Electric Scooters? » Electric Scooter Guide [online]. [vid. 2022-10-24]. Dostupné z: https://electric-scooter.guide/blog/the-first-electric-scooters/"
					}
					id="electric-scooter-guide-what-were-first-electric-scooters"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[24]</span>}
					name={
						"V Praze začaly jezdit sdílené elektrické koloběžky Lime. Podívejte se, jak fungují - Lupa.cz [online]. [vid. 2022-10-24]. Dostupné z: https://www.lupa.cz/aktuality/v-praze-zacaly-jezdit-sdilene-elektricke-kolobezky-lime-podivejte-jak-funguji/"
					}
					id="lupa-v-praze-zacaly-jezdit-sdilene-elektricke-kolobezky-lime"
				/>

				<SourceBlock
					icon={<span className="text-primary-accent">[25]</span>}
					name={
						"Elektrické koloběžky | Elektrokoloběžky | Alza.cz [online]. [vid. 2022-10-24]. Dostupné z: https://www.alza.cz/sport/elektricke-kolobezky/18859663.htm"
					}
					id="alza-elektricke-kolobezky"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[26]</span>}
					name={
						"Chopper X9 Road Approved Electric Scooter 45 km/h 3,000 Watt Scooter, 50 km range [online]. [vid. 2022-10-29]. Dostupné z: https://www.amazon.de/-/en/Chopper-X9-Approved-Electric-Scooter/dp/B08HNBM9KX"
					}
					id="amazon-chopper"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[27]</span>}
					name={
						"History of Electric Bicycle - E-bike Facts [online]. [vid. 2022-10-20]. Dostupné z: http://www.bicyclehistory.net/motorcycle-history/electric-bicycle/?fbclid=IwAR1ODOdmzlQLuN1CNqJJNcnehD8d4CTASxZc5oDDEAmssKK5a1u1rA88bYY/"
					}
					id="history-of-electric-bicycle"
				/>

				<SourceBlock
					icon={<span className="text-primary-accent">[28]</span>}
					name={
						"Electric bicycle - Wikipedia [online]. [vid. 2022-10-20]. Dostupné z: https://en.wikipedia.org/wiki/Electric_bicycle"
					}
					id="wikipedia-electric-bicycle"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[29]</span>}
					name={
						"Reveal the electric bicycle history [online]. [vid. 2022-10-29]. Dostupné z: https://www.electric-bicycle-guide.com/electric-bicycle-history.html"
					}
					id="schnepf-electric-bicycle"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[30]</span>}
					name={
						"Základní popis elektrokola - BikeParkMost.cz [online]. [vid. 2022-10-24]. Dostupné z: https://www.bikeparkmost.cz/informace/poradna/6/"
					}
					id="zakladni-popis-elektrokola"
				/>

				<SourceBlock
					icon={<span className="text-primary-accent">[31]</span>}
					name={
						"Jaké jsou druhy elektrokol? 3 Druhy - Výhody & Specifika [online]. [vid. 2022-10-24]. Dostupné z: https://www.spotrebitelov.cz/clanky/druhy-elektrokol-a-jejich-specifika/"
					}
					id="jake-jsou-druhy-elektrokol"
				/>

				<SourceBlock
					icon={<span className="text-primary-accent">[32]</span>}
					name={
						"Městské elektrokolo Winora Tria 10 | 2022 | Haibike Morava [online]. [vid. 2022-10-24]. Dostupné z: https://www.haibike-morava.cz/mestske-elektrokolo-winora-tria-10-2022"
					}
					id="winora-tria-10"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[33]</span>}
					name={
						"Horské elektrokolo SCOTT ASPECT ERIDE 950 2021 - Moolbike [online]. [vid. 2022-10-24]. Dostupné z: https://www.moolbike.cz/horska-elektrokola/horske-elektrokolo-scott-aspect-eride-950-2021/"
					}
					id="scott-aspect-eride-950-2021"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[34]</span>}
					name={
						"The invention of the electric skateboard – The Wildcat Voice [online]. [vid. 2022-10-24]. Dostupné z: https://wildcatvoice.org/3358/arts-and-entertainment/the-invention-of-the-electric-skateboard/"
					}
					id="the-invention-of-electric-skateboard"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[35]</span>}
					name={
						"The History of Skateboarding & The Evolution of The Electric Skateboard [online]. [vid. 2022-10-24]. Dostupné z: https://transportationevolved.com/history-of-skateboarding-electric-skateboard/"
					}
					id="the-history-of-skateboarding"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[36]</span>}
					name={
						"All About Electric Skate Boards and The Benefits of Having One – E-Ride Solutions [online]. [vid. 2022-10-24]. Dostupné z: https://www.eridesolutions.com.au/blogs/news/all-about-electric-skate-boards-and-the-benefits-of-owning-one"
					}
					id="all-about-electric-skateboards"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[37]</span>}
					name={
						"Exway X1 PRO [online]. [vid. 2022-10-24]. Dostupné z: https://elektricke-skateboardy-a-longboardy.heureka.cz/exway-x1-pro/#prehled/"
					}
					id="exway"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[38]</span>}
					name={
						"WowGo AT2 [online]. [vid. 2022-10-24]. Dostupné z: https://elektricke-skateboardy-a-longboardy.heureka.cz/wowgo-at2/#prehled/"
					}
					id="wowgo"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[39]</span>}
					name={
						"How To Choose A Electric Skateboard Motor - BOUNDMOTOR [online]. [vid. 2022-10-24]. Dostupné z: https://boundmotor.com/how-to-choose-a-electric-skateboard-motor/"
					}
					id="how-to-chose-a-electric-skateboard-motor"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[40]</span>}
					name={
						"History of the Segway PT (Personal Transporter) | www.isegway.cz [online]. [vid. 2022-10-24]. Dostupné z: https://www.isegway.cz/prague-segway-article/history-of-the-segway-pt"
					}
					id="history-of-the-segway"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[41]</span>}
					name={
						"Stůj, nebo zazvoním! Strážníci často jezdí na směšných vozítkách - Metro.cz [online]. [vid. 2022-10-24]. Dostupné z: https://www.metro.cz/stuj-nebo-zazvonim-straznici-casto-jezdi-na-smesnych-vozitkach-pwu-/praha.aspx?c=A120524_174300_co-se-deje_rab"
					}
					id="stuj-nebo-zazvonim"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[42]</span>}
					name={
						"Segway – Wikipedie [online]. [vid. 2022-10-24]. Dostupné z: https://cs.wikipedia.org/wiki/Segway"
					}
					id="wikipedia-segway"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[43]</span>}
					name={
						"Exclusive: Segway, the most hyped invention since the Macintosh, ends production [online]. [vid. 2022-10-29]. Dostupné z: https://www.fastcompany.com/90517971/exclusive-segway-the-most-hyped-invention-since-the-macintosh-to-end-production"
					}
					id="dean-kamen-segway"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[44]</span>}
					name={
						"Usain Bolt Is Knocked Over By Segway-Riding Cameraman After Winning Gold : The Two-Way : NPR [online]. [vid. 2022-10-24]. Dostupné z: https://www.npr.org/sections/thetwo-way/2015/08/27/435226790/usain-bolt-is-knocked-over-by-segway-riding-cameraman-after-winning-gold"
					}
					id="usain-bolt-segway"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[45]</span>}
					name={
						"EasyGlider [online]. [vid. 2022-10-24]. Dostupné z: https://newatlas.com/easyglider/2758/"
					}
					id="easy-glider"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[46]</span>}
					name={
						"Electric unicycle - Wikipedia [online]. [vid. 2022-10-24]. Dostupné z: https://en.wikipedia.org/wiki/Electric_unicycle"
					}
					id="unicycle"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[47]</span>}
					name={
						"Solowheel Gyroscopic Electric Unicycle [online]. [vid. 2022-10-24]. Dostupné z: https://www.geekalerts.com/solowheel-gyroscopic-electric-unicycle/"
					}
					id="solowheel"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[48]</span>}
					name={
						"Monowheel - Wikipedia [online]. [vid. 2022-10-24]. Dostupné z: https://en.wikipedia.org/wiki/Monowheel"
					}
					id="monowheel"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[49]</span>}
					name={
						"Hoverboard GYROOR G1, silver (85016704) - Hoverboardy | scorpion-elektro.com [online]. [vid. 2022-10-24]. Dostupné z: https://www.scorpion-elektro.com/katalog/hoverboard-gyroor-g1-silver-85016704.html?utm_source=Referral&utm_medium=google-nakupy&utm_campaign=2001-5000-kc&utm_content=hoverboardy&utm_term=hoverboard-gyroor-g1-silver-85016704"
					}
					id="hoverboard"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[50]</span>}
					name={
						"The Story of Onewheel - Voltes [online]. [vid. 2022-10-24]. Dostupné z: https://www.voltes.nl/en/blogs/blog/the-story-of-onewheel/"
					}
					id="the-story-of-onewheel"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[51]</span>}
					name={
						"Onewheel - Wikipedia [online]. [vid. 2022-10-24]. Dostupné z: https://en.wikipedia.org/wiki/Onewheel#cite_note-5"
					}
					id="onewheel-wikipedia"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[52]</span>}
					name={
						"The history of the one-wheeled board and the Onewheel! - FallmanTech [online]. [vid. 2022-10-24]. Dostupné z: https://fallman.tech/history-of-onewheel/"
					}
					id="the-history-of-the-one-wheeled-board"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[53]</span>}
					name={
						"Balancing Scooter / Skateboard - YouTube [online]. [vid. 2022-10-24]. Dostupné z: https://www.youtube.com/watch?v=HGbbag9dklU"
					}
					id="balancing-scooter"
				/>
				<SourceBlock
					icon={<span className="text-primary-accent">[54]</span>}
					name={
						"Onewheel XR [online]. [vid. 2022-10-29]. Dostupné z: https://www.ridefatdaddy.com/product/onewheel-xr/"
					}
					id="onewheel-image"
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
