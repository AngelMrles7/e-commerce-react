import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Detail, Home, Category } from '../pages';

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
		],
	},
]);
