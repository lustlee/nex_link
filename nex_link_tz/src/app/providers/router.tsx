import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App.tsx';


const router = createBrowserRouter([
	{
		path: '/',
		element: <App/>
	}
]);

export const AppRouter = () => <RouterProvider router={ router }/>;