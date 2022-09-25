import { DefaultLayout } from "../components/layout";
import { TextLink } from "../components/links";

const metaData = {
	meta_title: "Example Title", // meta_title
	meta_description: "Example description.", // meta_description
	canonical_url: "https://example.com", // canonical url
	og_type: "website", //og:type
	og_url: "https://example.com", //og_url
	og_image: "https://example.com/assets/images/seo/og-image.png", // og_image
	og_title: "Example Title", // og_title
	og_description: "Example description.", // og_description
	twitterImage: "https://example.com/assets/images/seo/og-image.png", // twitte:image
	twitterDescription: "Example description.", // twitter:description
	twitterTitle: "Example Title", // twitter:title
};

const schema = {};

function Index() {
	return (
		<>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
				consectetur augue. Donec vitae tincidunt odio. Morbi lacinia malesuada
				erat, a viverra purus dignissim et. Mauris dapibus metus augue, vel
				sagittis mauris feugiat a. Nam congue sapien in mattis auctor. Nulla
				tincidunt tempor odio. Integer at arcu tellus. Vestibulum vulputate erat
				nec enim gravida, vitae vestibulum dolor pretium. Vestibulum varius
				ullamcorper vestibulum. Donec vulputate, tellus facilisis pharetra
				tincidunt, turpis ante ornare sapien, sit amet sollicitudin mauris nunc
				et quam. Integer et lobortis risus, id imperdiet tortor. Suspendisse
				eget finibus elit. Morbi egestas congue enim, in laoreet est tempus
				congue. Nullam sem lorem, sagittis ut consectetur vitae, pretium id
				dolor. Aenean sodales interdum hendrerit. Proin ut euismod urna. Mauris
				sit amet hendrerit ex. Sed nec justo purus. Nunc sagittis, tortor et
				interdum suscipit, arcu est lobortis enim, ut dapibus est mauris non
				eros. Aliquam congue ornare mauris nec iaculis. Nam consequat, ipsum sed
				dapibus auctor, eros quam tempor purus, nec porta orci nulla eget augue.
				Pellentesque non libero sodales, iaculis neque quis, tempus ante.
				Vivamus congue justo vel purus faucibus, vitae dignissim ligula auctor.
				Maecenas elit arcu, pretium a interdum rutrum, ornare gravida felis.
				Donec sit amet risus tincidunt, feugiat ante eget, fermentum felis.
				Nulla in arcu id augue consectetur tempor convallis vel turpis. Donec
				mattis sed augue non semper. Morbi convallis nunc at tempus aliquam. Ut
				et velit est. Sed id tellus a ex feugiat aliquam vel sit amet turpis.
				Maecenas ac mattis ipsum. Nunc tortor augue, mollis eget sollicitudin
				at, suscipit non elit. Nunc eget dui lacinia, accumsan augue ac,
				hendrerit quam. Nulla nunc lorem, interdum sed semper vehicula,
				fringilla nec massa. Donec dictum libero diam. Vestibulum laoreet tortor
				augue. Praesent eu nisl dignissim, faucibus leo at, viverra massa. Donec
				a condimentum justo. Mauris volutpat turpis vel iaculis suscipit. Proin
				felis tortor, semper ut sapien id, pellentesque posuere mi. In id varius
				metus. Pellentesque quis posuere arcu. Sed tempus euismod ullamcorper.
				Fusce fermentum urna at tincidunt dapibus. Morbi lectus tellus, ultrices
				eget ligula eu, consectetur posuere libero. Etiam arcu tellus, elementum
				ac finibus sit amet, viverra eu dui. Sed sem arcu, pharetra a venenatis
				eu, lacinia sed dui. Donec dui arcu, varius nec volutpat in, vestibulum
				a augue. Fusce euismod facilisis nibh. Phasellus at tincidunt risus.
				Donec ante quam, porta ac mattis sit amet, vulputate malesuada libero.
				In in euismod sem, a eleifend lectus. Donec gravida ex sit amet congue
				dictum. Cras dapibus augue nisl. Morbi gravida sollicitudin nunc, auctor
				laoreet leo rhoncus vitae. Nulla vel mi ut nibh vehicula condimentum.
				Suspendisse sed venenatis ante, vitae dignissim nunc. Phasellus congue
				condimentum turpis in mattis. Aenean sollicitudin pretium vulputate.
				Vivamus facilisis lorem nec lectus dapibus viverra. Morbi ultricies nunc
				justo, ac mattis velit condimentum ac. Integer at libero sit amet magna
				scelerisque consequat in sagittis mi.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
				consectetur augue. Donec vitae tincidunt odio. Morbi lacinia malesuada
				erat, a viverra purus dignissim et. Mauris dapibus metus augue, vel
				sagittis mauris feugiat a. Nam congue sapien in mattis auctor. Nulla
				tincidunt tempor odio. Integer at arcu tellus. Vestibulum vulputate erat
				nec enim gravida, vitae vestibulum dolor pretium. Vestibulum varius
				ullamcorper vestibulum. Donec vulputate, tellus facilisis pharetra
				tincidunt, turpis ante ornare sapien, sit amet sollicitudin mauris nunc
				et quam. Integer et lobortis risus, id imperdiet tortor. Suspendisse
				eget finibus elit. Morbi egestas congue enim, in laoreet est tempus
				congue. Nullam sem lorem, sagittis ut consectetur vitae, pretium id
				dolor. Aenean sodales interdum hendrerit. Proin ut euismod urna. Mauris
				sit amet hendrerit ex. Sed nec justo purus. Nunc sagittis, tortor et
				interdum suscipit, arcu est lobortis enim, ut dapibus est mauris non
				eros. Aliquam congue ornare mauris nec iaculis. Nam consequat, ipsum sed
				dapibus auctor, eros quam tempor purus, nec porta orci nulla eget augue.
				Pellentesque non libero sodales, iaculis neque quis, tempus ante.
				Vivamus congue justo vel purus faucibus, vitae dignissim ligula auctor.
				Maecenas elit arcu, pretium a interdum rutrum, ornare gravida felis.
				Donec sit amet risus tincidunt, feugiat ante eget, fermentum felis.
				Nulla in arcu id augue consectetur tempor convallis vel turpis. Donec
				mattis sed augue non semper. Morbi convallis nunc at tempus aliquam. Ut
				et velit est. Sed id tellus a ex feugiat aliquam vel sit amet turpis.
				Maecenas ac mattis ipsum. Nunc tortor augue, mollis eget sollicitudin
				at, suscipit non elit. Nunc eget dui lacinia, accumsan augue ac,
				hendrerit quam. Nulla nunc lorem, interdum sed semper vehicula,
				fringilla nec massa. Donec dictum libero diam. Vestibulum laoreet tortor
				augue. Praesent eu nisl dignissim, faucibus leo at, viverra massa. Donec
				a condimentum justo. Mauris volutpat turpis vel iaculis suscipit. Proin
				felis tortor, semper ut sapien id, pellentesque posuere mi. In id varius
				metus. Pellentesque quis posuere arcu. Sed tempus euismod ullamcorper.
				Fusce fermentum urna at tincidunt dapibus. Morbi lectus tellus, ultrices
				eget ligula eu, consectetur posuere libero. Etiam arcu tellus, elementum
				ac finibus sit amet, viverra eu dui. Sed sem arcu, pharetra a venenatis
				eu, lacinia sed dui. Donec dui arcu, varius nec volutpat in, vestibulum
				a augue. Fusce euismod facilisis nibh. Phasellus at tincidunt risus.
				Donec ante quam, porta ac mattis sit amet, vulputate malesuada libero.
				In in euismod sem, a eleifend lectus. Donec gravida ex sit amet congue
				dictum. Cras dapibus augue nisl. Morbi gravida sollicitudin nunc, auctor
				laoreet leo rhoncus vitae. Nulla vel mi ut nibh vehicula condimentum.
				Suspendisse sed venenatis ante, vitae dignissim nunc. Phasellus congue
				condimentum turpis in mattis. Aenean sollicitudin pretium vulputate.
				Vivamus facilisis lorem nec lectus dapibus viverra. Morbi ultricies nunc
				justo, ac mattis velit condimentum ac. Integer at libero sit amet magna
				scelerisque consequat in sagittis mi.
			</p>
			<TextLink linkText={"test"} linkUrl={"/"} />
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
