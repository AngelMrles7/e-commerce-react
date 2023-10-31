import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { shoppingStateSlice } from './states/shoppingState';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk, { ThunkDispatch } from 'redux-thunk';
import AuthStateSlice from './states/AuthState';

const persistConfig = {
	key: 'root',
	storage,
};

const rootReducer = combineReducers({
	shoppingCart: shoppingStateSlice.reducer,
	auth: AuthStateSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;

export type AppDispatch = typeof store.dispatch;
