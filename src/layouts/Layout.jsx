import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ScrollRestoration } from '../components/ScrollRestoration';

const Layout = () => {
	return (
		<ScrollRestoration>
			<div className='wrapper'>
				<Header />
				<div className='content-container mx-auto content bg-[#8AEAB0] rounded-xl shadow-xl mt-5 sm:mt-20 bg-opacity-60 p-10'>
					<Outlet></Outlet>
				</div>
				<Footer />
			</div>
		</ScrollRestoration>
	);
};

export default Layout;
