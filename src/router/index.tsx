import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home, Detail } from '../pages';
import { Category } from '../pages/Category';
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
]);
