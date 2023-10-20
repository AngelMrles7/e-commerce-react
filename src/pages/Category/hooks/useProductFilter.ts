import { useQuery } from 'react-query';
import { getCategoryProducts } from '../services/productFilter.service';

export const useProductFilter = (
	categoryId?: string,
	subcategoryName?: string,
	brands?: string[],
	page: number = 1
) => {
	const id = Number(categoryId?.replace('cat', ''));

	const productQuery = useQuery(
		['product', { id, subcategoryName, brands, page }],
		() => getCategoryProducts(id, subcategoryName, brands, page),
		{
			staleTime: 1000 * 60 * 60,
		}
	);

	return { productQuery };
};
