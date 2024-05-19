import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Footer = () => {
	return (
		<footer className='px-10 py-4 mt-10 sm:flex items-center grid justify-center  sm:justify-between'>
			<div>
				<NavLink>
					<img
						src={logo}
						className='sm:w-[75%] w-[50%] mx-auto mb-5 sm:mb-0'
						alt='logo'
					/>
				</NavLink>
			</div>
			<div className='flex items-center gap-5 sm:gap-10 font-semibold'>
				<NavLink
					className='hover:text-orange-500 duration-500'
					to='/privatepolicy'
				>
					Privacy Policy
				</NavLink>
				<NavLink
					className='hover:text-orange-500 duration-500'
					to='/returnpolicy'
				>
					Return Policy
				</NavLink>
			</div>
		</footer>
	);
};

export default Footer;
