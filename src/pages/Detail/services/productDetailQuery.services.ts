import { productImageAdapter } from '../../../adapters';
import { BASE_URL } from '../../../services';

export const getProductInfo = async (productNumber: number) => {
	const response = await fetch(`${BASE_URL}products/info/${productNumber}`),
		json = await response.json();

	if (!response.ok) {
		throw `Error ${json.statusCode}: ${json.message}`;
	}

	const data = productImageAdapter(json.data);

	return data;
};
