import { configureStore } from '@reduxjs/toolkit';
import { shoppingStateSlice } from './states/shoppingState';
import { setLocalStorage } from '../utils';
import { LocalStorageTypes } from '../models';

const persistanceMiddleware = state => next => action => {
	next(action);
	setLocalStorage(LocalStorageTypes.SHOPPINGCART, store.getState());
};

export const store = configureStore({
	reducer: {
		shoppingCart: shoppingStateSlice.reducer,
	},
	middleware: [persistanceMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
