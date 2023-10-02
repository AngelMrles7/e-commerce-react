import { useQuery } from 'react-query';
import { BASE_URL } from './api_config';
import { createCategoriesAdapter } from '../adapters';

const getCategories = async () => {
	const response = await fetch(`${BASE_URL}categories`),
		json = await response.json();

	if (!response.ok) {
		throw `Error ${json.statusCode}: ${json.message}`;
	}

	const data = createCategoriesAdapter(json.data);
	return data;
};

export const useCategories = () => {
	const categoriesQuery = useQuery(['categories'], getCategories, {
		staleTime: 1000 * 60 * 60,
	});

	return { categoriesQuery };
};
