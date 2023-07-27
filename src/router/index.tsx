import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home, SignIn } from '../pages';

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
				path: '/category/:id',
				element: '',
			},
		],
	},
	{
		path: '/signin',
		element: <SignIn />,
	},
]);
