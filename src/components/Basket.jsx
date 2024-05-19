import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Payment from './Payment';

const Basket = () => {
	const {
		showBasket,
		setShowBasket,
		basketItems,
		removeFromBasket,
		setBasketItems,
	} = useContext(AppContext);

	var [showPayment, setShotPayment] = useState(false);

	const handleAddQuantity = item => {
		const updatedBasketItems = basketItems.map(basketItem =>
			basketItem.title === item.title
				? { ...basketItem, quantity: basketItem.quantity + 1 }
				: basketItem
		);
		setBasketItems(updatedBasketItems);
	};

	const handleSubtractQuantity = item => {
		const updatedBasketItems = basketItems.map(basketItem =>
			basketItem.title === item.title
				? { ...basketItem, quantity: Math.max(1, basketItem.quantity - 1) }
				: basketItem
		);
		setBasketItems(updatedBasketItems);
	};

	const totalSum = basketItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
    
   // console.log(basketItems);

	return (
		<div className='py-10 px-5 fixed top-2 left-2 min-w-[250px] min-h-[450px] rounded-md bg-white text-black flex flex-col justify-between'>
			<span
				className='block text-xl text-black cursor-pointer absolute top-2 right-2'
				onClick={() => setShowBasket(!showBasket)}
			>
				X
			</span>
			<div>
				{basketItems.map(item => (
					<div
						key={item.title}
						className='flex sm:grid grid-cols-4 sm:gap-10 gap-4 items-center justify-center mt-5'
					>
						<div className='max-w-[50px] rounded-[50%]'>
							<img src={item.photo} alt={item.title} />
						</div>
						<div>
							<div className='font-bold mb-2'>{item.title}</div>
							<div>{item.price * item.quantity} $</div>
						</div>
						<div className='flex items-center justify-end gap-2'>
							<button
								className='flex items-center justify-center bg-orange-500 rounded-md p-2 font-semibold text-white'
								onClick={() => handleAddQuantity(item)}
							>
								+
							</button>
							<div>{item.quantity}</div>
							<button
								className='flex items-center justify-center bg-orange-500 rounded-md p-2 font-semibold text-white'
								onClick={() => handleSubtractQuantity(item)}
							>
								-
							</button>
						</div>
						<div className='flex items-center justify-end'>
							<button
								className='text-red-500 font-semibold'
								onClick={() => removeFromBasket(item.title)}
							>
								X
							</button>
						</div>
					</div>
				))}
			</div>

			<div className='flex items-center gap-5 justify-between'>
				<h2 className='font-bold text-lg'>Total: {totalSum}</h2>
				<button
					className={`${
						showPayment
							? 'hidden'
							: 'px-4 py-2 bg-sky-500 rounded-md text-white font-semibold'
					}`}
					onClick={() => setShotPayment(!showPayment)}
				>
					Buy
				</button>
			</div>
			{showPayment && <Payment total={totalSum} items={basketItems} />}
		</div>
	);
};

export default Basket;
