import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './layouts/Home';
import ErrorsPage from './layouts/ErrorsPage';
import PrivacyPolicy from './layouts/PrivacyPolicy';
import ReturnPolicy from './layouts/ReturnPolicy';
import Payment from './layouts/Payment';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorsPage />,
		children: [
			{
				element: <Home />,
				index: true,
			},
			{
				path: '/privatepolicy',
				element: <PrivacyPolicy />,
			},
			{
				path: '/returnpolicy',
				element: <ReturnPolicy />,
			},
            {
				path: '/payment',
				element: <Payment/>,
			}
		],
	},
]);

export default router;
