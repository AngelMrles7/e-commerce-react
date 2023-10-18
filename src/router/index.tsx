import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home, Detail } from '../pages';

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
				path: '/product/:productId',
				element: <Detail />,
			},
		],
	},
]);
