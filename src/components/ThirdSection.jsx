import image from '../assets/IMG_3985.png';
const ThirdSection = () => {
	return (
		<section className='sm:mt-20 mt-10 xl:grid flex flex-col-reverse xl:grid-cols-2 items-center justify-between gap-10'>
			<div className='sm:max-w-xl max-w-[15rem]'>
				<img src={image} />
			</div>
			<div>
				<h2 className='text-center text-2xl sm:text-3xl font-bold mb-10 tracking-[0.20rem]'>
					Uniqueness and Originality
				</h2>
				<p className='sm:text-xl tracking-[0.15rem]'>
					Our craftsmen have been working on the development for more than 3
					years. They make sure that you feel comfortable, and most importantly,
					enjoy a simple purchase. The unique and original ideas of this person
					are unsurpassed. The development process is very complicated and
					combines many difficult stages. The craftsman spends more than 6-7
					hours on just one product. This person does it with a smile and enjoys
					the process
				</p>
			</div>
		</section>
	);
};

export default ThirdSection;
