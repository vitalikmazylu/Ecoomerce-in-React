import image from '../assets/IMG_3983.png';
const SecondSection = () => {
	return (
		<section className='sm:mt-20 mt-10 xl:grid flex flex-col-reverse xl:grid-cols-2 items-center justify-between gap-10'>
			<div className='sm:max-w-xl max-w-[15rem]'>
				<img src={image} />
			</div>
			<div>
				<h2 className='text-center text-2xl sm:text-3xl font-bold mb-10 tracking-[0.20rem]'>
					The 420 culture
				</h2>
				<p className='sm:text-xl tracking-[0.15rem]'>
					Exclusive accessories for true culture lovers. We stand for
					originality, creativity and true comfort in any city. Here you will
					find everything you like. No matter what mood you are in today, no
					matter what is bothering you, remember your favorite product, and all
					your worries will disappear in a flash
				</p>
			</div>
		</section>
	);
};

export default SecondSection;
