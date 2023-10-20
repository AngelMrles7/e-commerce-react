import { useQuery } from 'react-query';
import { getProductBrands } from '../services/productBrands.service';

export const useProductBrands = (
	categoryId?: string,
	subcategoryName?: string
) => {
	const id = Number(categoryId?.replace('cat', ''));

	const brandsQuery = useQuery(
		['brands', { id, subcategoryName }],
		() => getProductBrands(id, subcategoryName),
		{
			staleTime: 1000 * 60 * 60,
		}
	);

	return { brandsQuery };
};
