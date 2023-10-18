import { useQuery } from 'react-query';
import { getProductInfo } from '../services/productDetailQuery.services';

export const useProductDetails = (productNumber: number) => {
	const productQuery = useQuery(['product', productNumber], () =>
		getProductInfo(productNumber)
	);

	return { productQuery };
};
