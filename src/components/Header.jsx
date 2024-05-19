import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cart from '../assets/basket.png';
import logo from '../assets/logo.svg';
import { AppContext } from '../context/AppContext';

const Header = () => {
	const { showBasket, setShowBasket } = useContext(AppContext);

	return (
		<header className='px-10 py-4 flex sm:justify-center items-center relative'>
			<div>
				<NavLink to='/'>
					<img className='sm:max-w-sm max-w-[100px]' src={logo} alt='logo' />
				</NavLink>
			</div>
			<div
				className='ml-auto text-white absolute top-18 cursor-pointer right-20'
				onClick={() => setShowBasket(!showBasket)}
			>
				<img src={cart} alt='basket' />
			</div>
		</header>
	);
};

export default Header;
