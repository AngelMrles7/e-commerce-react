import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home, Detail } from '../pages';
import { Category } from '../pages/Category';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';
import { SignIn, SignUp } from '../pages/Auth';
import { ProtectedRoute } from './ProtectedRoute';
import Dashboard from '../pages/Dashboard/Dashboard';
import { ROLES } from '../data/constants';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <></>,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/category/:categoryId/:subcategoryName?',
				element: <Category />,
			},
			{
				path: '/product/:productId',
				element: <Detail />,
			},
			{
				path: '/cart',
				element: <ShoppingCart />,
			},
		],
	},

	{
		path: '/signup',
		element: <SignUp />,
	},
	{
		path: '/signin',
		element: <SignIn />,
	},
	{
		path: '/dashboard/*',
		element: (
			<ProtectedRoute
				isAuthorized={[ROLES.ADMIN, ROLES.MODERATOR]}
				redirectUnauth='/signin'
				redirectUnauthorized='/'
			>
				<Dashboard />
			</ProtectedRoute>
		),
		children: [],
	},
]);
