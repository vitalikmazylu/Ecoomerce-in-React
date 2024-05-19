import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import Basket from '../components/Basket';
import FirstSection from '../components/FirstSection';
import FourSection from '../components/FourSecion';
import SecondSection from '../components/SecondSection';
import Slider from '../components/Slider';
import ThirdSection from '../components/ThirdSection';

const Home = () => {
	const { showBasket, setShowBasket } = useContext(AppContext);

	return (
		<div>
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourSection />
			<Slider />
			{showBasket && <Basket />}
		</div>
	);
};

export default Home;
