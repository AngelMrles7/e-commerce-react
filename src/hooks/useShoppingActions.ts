import { useAppDispatch, useAppSelector } from '.';
import {
	addToCart,
	decrementQuantity,
	getCartCount,
	incrementQuantity,
} from '../appState/states/shoppingState';
import { ProductInterface } from '../models';

export const useShoppingActions = () => {
	const dispatch = useAppDispatch();
	const cart = useAppSelector(state => state.shoppingCart.cart);

	const addCartProduct = (data: ProductInterface) => {
		dispatch(addToCart(data));
		dispatch(getCartCount());
	};

	const increaseAmount = (data: ProductInterface) => {
		dispatch(addToCart(data));
		dispatch(getCartCount());
	};

	const decreaseAmount = (data: ProductInterface) => {
		dispatch(decrementQuantity(data));
		dispatch(getCartCount());
	};

	const incrementsQuantity = (product: ProductInterface, quantity: number) => {
		dispatch(incrementQuantity({ product, quantity }));
		dispatch(getCartCount());
	};

	const getProductQuantity = (id: number) => {
		const itemInCart = cart.find(product => product.id === id);

		return itemInCart?.quantity ? itemInCart?.quantity : 0;
	};

	const getTotal = () => {
		let total = 0;
		cart.forEach(
			product => (total += product.discount_price * product.quantity)
		);

		return total;
	};

	return {
		cart,
		addCartProduct,
		increaseAmount,
		decreaseAmount,
		getProductQuantity,
		incrementsQuantity,
		getTotal,
	};
};
