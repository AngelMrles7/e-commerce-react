import { useAppDispatch } from '.';
import { addToCart, getCartCount } from '../appState/states/shoppingState';
import { ProductInterface } from '../models';

export const useShoppingActions = () => {
	const dispatch = useAppDispatch();

	const addCartProduct = (data: ProductInterface) => {
		dispatch(addToCart(data));
		dispatch(getCartCount());
	};

	return { addCartProduct };
};
