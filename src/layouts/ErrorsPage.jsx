import { NavLink, useRouteError } from 'react-router-dom';

const ErrorsPage = () => {
	const error = useRouteError();
	return (
		<div className='flex flex-col items-center justify-center w-full h-screen bg-white'>
			<h1 className='text-5xl leading-normal tracking-widest font-bold text-orange-500 mb-8'>
				Oops!
			</h1>
			<p className='font-bold text-black mb-4'>Sorry, something went wrong</p>
			<p className='font-bold text-red-500'>
				{error.statusText ?? error.message}
			</p>
			<NavLink
				className='font-bold bg-white text-[#27ae60] py-4 px-10 rounded-md shadow-md shadow-green-400 hover:bg-[#27ae60] hover:text-white duration-500 mt-10'
				to='/'
			>
				На головну
			</NavLink>
		</div>
	);
};

export default ErrorsPage;
