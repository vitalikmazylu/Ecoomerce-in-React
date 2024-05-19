import { useContext, useEffect, useState } from 'react';
import first from '../assets/first.jpg';
import five from '../assets/five.jpg';
import four from '../assets/four.jpg';
import second from '../assets/second.jpg';
import seven from '../assets/seven.jpg';
import six from '../assets/six.jpg';
import third from '../assets/third.jpg';
import { AppContext } from '../context/AppContext';

const Slider = () => {
	const { addToBasket, setShowBasket } =
		useContext(AppContext);

	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{
			photo: first,
			text: 'This is a complete exclusive. 3 in 1, and made of real metal! A bong, a pipe and a thimble. To make the device function as a bong, put it on a bottle. The device fits very tightly, so no extra smoke is wasted! If you remove the long tube and screw on the cap (included), you can use it as a regular pipe. You can also  to use it as a thimble. A needle for cleaning the holes is included (on a chain). This device is completely disassembled, which allows you to clean it well or carry it in a disassembled form. We are sure that you have never seen anything like this before, and with such quality of workmanship! All the details are well-made and designed in advance. We work for perfection, we work for your satisfaction!',
			title: '3 в 1',
			price: '125',
			quantity: '1',
		},
		{
			photo: second,
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			title: 'Second Item',
			price: '99',
			quantity: '1',
		},
		{
			photo: third,
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			title: 'Third Item',
			price: '79.99',
			quantity: '1',
		},
		{
			photo: four,
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			title: 'Four Item',
			price: 64.99,
			quantity: '1',
		},
		{
			photo: five,
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			title: 'Five Item',
			price: '500',
			quantity: '1',
		},
		{
			photo: six,
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			title: 'Six Item',
			price: '74.99',
			quantity: '1',
		},
		{
			photo: seven,
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			title: 'Seven Item',
			price: '74.99',
			quantity: '1',
		},
	];

	useEffect(() => {
		const slideInterval = setInterval(() => {
			setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
		}, 5000);

		return () => clearInterval(slideInterval);
	}, [slides.length]);

	const slide = slides[currentSlide];

	const handleNextSlide = () => {
		setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
	};

	const handlePrevSlide = () => {
		setCurrentSlide(
			prevSlide => (prevSlide - 1 + slides.length) % slides.length
		);
	};

	return (
		<section>
			<div className='flex xl:items-center xl:flex-row flex-col justify-between 2xl:justify-center 2xl:gap-20 gap-10 mt-10 p-10'>
				<div className='xl:max-w-xl'>
					<div>
						<h4 className='text-3xl font-bold'>{slide.title}</h4>
						<p className='sm:text-lg text-base mt-10'>{slide.text}</p>
					</div>
					<div className='flex items-center gap-10 mt-10'>
						<p className='font-bold text-xl'>{slide.price} $</p>
						<button
							onClick={() => {
								addToBasket(slide);
								setShowBasket(true);
							}}
							className='px-4 py-2 font-semibold rounded-md bg-white text-green-500 select-none border-2 border-transparent hover:border-orange-500 duration-500'
						>
							BUY NOW
						</button>
					</div>
				</div>
				<div className='xl:max-w-sm  flex items-center justify-center'>
					<img
						src={slide.photo}
						alt={slide.title}
						className='sm:h-[400px] rounded-md select-none'
					/>
				</div>
			</div>
			<div className='flex justify-center mt-10'>
				<div className='cursor-pointer' onClick={handlePrevSlide}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-8 w-8 text-orange-500'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M15 19l-7-7 7-7'
						/>
					</svg>
				</div>
				<div className='cursor-pointer mx-4' onClick={handleNextSlide}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-8 w-8 text-orange-500'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M9 5l7 7-7 7'
						/>
					</svg>
				</div>
			</div>
		</section>
	);
};

export default Slider;
