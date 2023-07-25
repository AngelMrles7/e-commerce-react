import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageTypes, ProductInterface } from '../../models';
import { getLocalStorage } from '../../utils';

export interface CartItem extends ProductInterface {
	quantity: number;
}

export interface ShoppingState {
	cart: CartItem[];
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

		incrementQuantity: (state, acttion: PayloadAction<ProductInterface>) => {
			const itemInCart = state.cart.find(
				product => product.id === acttion.payload.id
			);

			if (itemInCart) {
				itemInCart.quantity++;
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
	incrementQuantity,
	decrementQuantity,
	removeItem,
	getCartCount,
} = shoppingStateSlice.actions;
export default shoppingStateSlice.reducer;
