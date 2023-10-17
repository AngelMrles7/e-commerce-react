import { useQuery } from 'react-query';
import { BASE_URL } from './api_config';
import { createProductsAdapter } from '../adapters';

const getProducts = async () => {
	const response = await fetch(`${BASE_URL}products`),
		json = await response.json();

	if (!response.ok) {
		throw `Error ${json.statusCode}: ${json.message}`;
	}

	const data = createProductsAdapter(json.data.data);

	return data;
};

export const useProducts = () => {
	const productsQuery = useQuery(['products'], getProducts, {
		staleTime: 1000 * 60 * 60,
	});

	return {
		productsQuery,
	};
};
