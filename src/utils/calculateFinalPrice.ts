export const calculateFinalPrice = (
	price: number | string,
	discountPrice: number | string
) => {
	const finalPrice = Math.round(
		Number(price) - Number(price) * Number(discountPrice)
	);
	return finalPrice;
};
