import { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [showBasket, setShowBasket] = useState(false);
	const [basketItems, setBasketItems] = useState([]);

	const addToBasket = item => {
		const existingItem = basketItems.find(
			basketItem => basketItem.title === item.title
		);

		if (existingItem) {
			const updatedBasketItems = basketItems.map(basketItem =>
				basketItem.title === item.title
					? { ...basketItem, quantity: basketItem.quantity + 1 }
					: basketItem
			);
			setBasketItems(updatedBasketItems);
		} else {
			setBasketItems([...basketItems, { ...item, quantity: 1 }]);
		}
	};

	const removeFromBasket = title => {
		setBasketItems(basketItems.filter(item => item.title !== title));
	};

	return (
		<AppContext.Provider
			value={{
				showBasket,
				setShowBasket,
				basketItems,
				setBasketItems,
				addToBasket,
				removeFromBasket,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppContextProvider };
