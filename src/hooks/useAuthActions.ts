import { useAppDispatch, useAppSelector } from '.';
import { jwtDecode } from 'jwt-decode';
import { logout } from '../appState/states/AuthState';
import { logoutRequest } from '../services';

interface JwtPayload {
	iss: string;
	iat: number;
	exp: number;
	nbf: number;
	jti: string;
	sub: string;
	prv: string;
	rol_id: number;
}

export const useAuthActions = () => {
	const dispatch = useAppDispatch();
	const authState = useAppSelector(state => state.auth);

	const getUserRole = (): number => {
		if (!authState.token) {
			return 0;
		}
		const decoded = jwtDecode<JwtPayload>(authState.token);

		return decoded.rol_id;
	};

	const userLogout = async () => {
		if (authState.token) {
			const response = await logoutRequest(authState.token);

			if (response.status === 'ok') dispatch(logout());
		}
	};

	return {
		authState,
		getUserRole,
		userLogout,
	};
};
