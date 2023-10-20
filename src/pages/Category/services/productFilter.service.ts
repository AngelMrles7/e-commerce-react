import { createProductsAdapter } from '../../../adapters';
import { BASE_URL } from '../../../services';

export const getCategoryProducts = async (
	categoryId: number,
	subcategoryName?: string,
	brands: string[] = [],
	page: number = 1
) => {
	const params = new URLSearchParams();

	if (brands?.length > 0) {
		const brandsString = JSON.stringify(brands);
		params.append('brands', brandsString);
	}

	params.append('page', page.toString());

	const response = await fetch(
			`${BASE_URL}products/category/${categoryId}${
				subcategoryName ? '/' + subcategoryName : ''
			} ${'?' + params} `
		),
		json = await response.json();

	if (!response.ok) {
		throw `Error ${json.statusCode}: ${json.message}`;
	}

	const data = createProductsAdapter(json.data);
	return {
		data,
		current_page: json.current_page,
		last_page: json.last_page,
		tota_items: json.total,
	};
};
