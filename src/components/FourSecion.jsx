import image from '../assets/IMG_3984.png';

const FourSection = () => {
	return (
		<section className='sm:mt-20 mt-10 xl:grid flex flex-col-reverse xl:grid-cols-2 items-center justify-between gap-10'>
			<div className='sm:max-w-xl max-w-[15rem]'>
				<img src={image} />
			</div>
			<div>
				<h2 className='text-center text-2xl sm:text-3xl font-bold mb-10 tracking-[0.20rem]'>
					Individual Approach
				</h2>
				<p className='sm:text-xl tracking-[0.15rem]'>
					We value your individuality. Our consultants are always ready to help
					and offer recommendations, taking into account your personal
					preferences. Your pleasure is our priority
				</p>
			</div>
		</section>
	);
};

export default FourSection;
