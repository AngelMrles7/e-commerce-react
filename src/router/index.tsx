import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { SignIn } from '../pages';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <></>,
		children: [],
	},
	{
		path: '/signin',
		element: <SignIn />,
	},
]);
