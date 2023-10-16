import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Category, Home } from '../pages';
import { SignIn, SignUp } from '../pages/Auth';
import Detail from '../pages/Detail/Detail';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';

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
		],
	},
]);
