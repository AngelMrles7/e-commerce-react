import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../services';

interface AuthStateInterface {
	token: string | null;
	isLogin: boolean;
	isLoading: boolean;
}

const initialState: AuthStateInterface = {
	token: null,
	isLogin: false,
	isLoading: false,
};

export const loginUser = createAsyncThunk(
	'/auth/login',
	async (userData: any) => {
		const response = await fetch(`${BASE_URL}auth/login`, {
			method: 'post',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		});

		const result = await response.json();
		if (!response.ok) {
			throw `Error ${result.statusCode}: ${result.message}`;
		}

		return result;
	}
);

const AuthStateSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(loginUser.pending, (state: AuthStateInterface, action: any) => {
				state.isLoading = true;
			})
			.addCase(
				loginUser.fulfilled,
				(state: AuthStateInterface, action: any) => {
					state.isLoading = false;
					state.isLogin = true;
					state.token = action.payload.access_token;
				}
			)
			.addCase(loginUser.rejected, (state: AuthStateInterface, action: any) => {
				state.isLoading = false;
				state.isLogin = false;
				state.token = null;
			});
	},
});

export default AuthStateSlice.reducer;
