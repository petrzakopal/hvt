export const SecondHeading = (textClass, text) => {
	return <h2 className={`${SecondHeadingProperties} ${textClass}`}>{text}</h2>;
};

export const ThirdHeading = (textClass, text) => {
	return <h3 className={`${ThirdHeadingProperties} ${textClass}`}>{text}</h3>;
};

export const FourthHeading = (textClass, text) => {
	return <h4 className={`${FourthHeadingProperties} ${textClass}`}>{text}</h4>;
};

export const FirstHeading = (textClass, text) => {
	return <h1 className={`${FirstHeadingProperties} ${textClass}`}>{text}</h1>;
};

export const SecondHeadingProperties =
	"lg:text-4xl text-3xl text-black font-semibold text-left";

export const ThirdHeadingProperties =
	"lg:text-4xl text-3xl text-black font-semibold text-left";

export const FourthHeadingProperties =
	"lg:text-2xl text-2xl text-black font-semibold text-left";

export const FirstHeadingProperties =
	"lg:text-6xl text-4xl text-black font-bold text-left";
