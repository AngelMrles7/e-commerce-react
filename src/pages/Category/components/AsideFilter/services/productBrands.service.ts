import { BASE_URL } from '../../../../../services';

export const getProductBrands = async (
	categoryId: number,
	subcategoryName?: string
) => {
	const response = await fetch(
			`${BASE_URL}brands/products/${categoryId}${
				subcategoryName ? '/' + subcategoryName : ''
			}`
		),
		json = await response.json();

	if (!response.ok) {
		throw `Error ${json.statusCode}: ${json.message}`;
	}

	return json.data;
};
