import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageTypes, ProductInterface } from '../../models';
import { getLocalStorage } from '../../utils';

export interface CartItemInterface extends ProductInterface {
	quantity: number;
}

export interface ShoppingState {
	cart: CartItemInterface[];
	totalItemsCart: number;
}

const initialState: ShoppingState = (() => {
	const persistedState = getLocalStorage(LocalStorageTypes.SHOPPINGCART);

	return {
		cart: persistedState ? persistedState.shoppingCart.cart : [],
		totalItemsCart: persistedState
			? persistedState.shoppingCart.totalItemsCart
			: 0,
	};
})();

export const shoppingStateSlice = createSlice({
	name: 'shoppingCart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ProductInterface>) => {
			const itemInCart = state.cart.find(
				product => product.id === action.payload.id
			);

			if (itemInCart) {
				itemInCart.quantity++;
			} else {
				state.cart.push({ ...action.payload, quantity: 1 });
			}
		},

		incrementQuantity: (state, action) => {
			const itemInCart = state.cart.find(
				product => product.id === action.payload.product.id
			);

			// validate that the quantity doesn't exceed the stock of the product.
			if (
				action.payload.quantity <= action.payload.product.stock &&
				action.payload.quantity > 0
			) {
				if (itemInCart) {
					itemInCart.quantity = action.payload.quantity;
				} else {
					state.cart.push({
						...action.payload.product,
						quantity: action.payload.quantity,
					});
				}
			}
		},

		decrementQuantity: (state, action: PayloadAction<ProductInterface>) => {
			const itemInCart = state.cart.find(
				product => product.id === action.payload.id
			);

			if (itemInCart) {
				if (itemInCart.quantity > 1) {
					itemInCart.quantity--;
				} else {
					const removeItem = state.cart.filter(
						product => product.id !== action.payload.id
					);

					state.cart = removeItem;
				}
			}
		},

		removeItem: (state, action: PayloadAction<ProductInterface>) => {
			const removeItem = state.cart.filter(
				product => product.id === action.payload.id
			);

			state.cart = removeItem;
		},

		getCartCount: state => {
			const { cart } = state;
			let totalItems = 0;

			for (let i = 0; i < cart.length; i++) {
				totalItems += cart[i].quantity;
			}

			state.totalItemsCart = totalItems;
		},
	},
});

export const {
	addToCart,
	decrementQuantity,
	removeItem,
	incrementQuantity,
	getCartCount,
} = shoppingStateSlice.actions;
export default shoppingStateSlice.reducer;
