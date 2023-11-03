import { Outlet, Navigate } from 'react-router-dom';
import { FC } from 'react';
import { useAuthActions } from '../hooks';

interface ProtectedRouteInterface {
	isAuthorized: number[];
	redirectUnauth: string;
	redirectUnauthorized: string;
	children: JSX.Element;
}

export const ProtectedRoute: FC<ProtectedRouteInterface> = ({
	isAuthorized = [],
	redirectUnauth = '/',
	redirectUnauthorized = '/',
	children,
}) => {
	const { authState, getUserRole } = useAuthActions(),
		userRol = getUserRole();

	if (!authState.isLogin) return <Navigate to={redirectUnauth} />;

	if (!isAuthorized.includes(userRol)) {
		return <Navigate to={redirectUnauthorized} />;
	}

	return children ? children : <Outlet />;
};
