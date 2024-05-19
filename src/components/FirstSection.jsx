import VideoPlayer from './VideoPlayer';

const FirstSection = () => {
	return (
		<div className='xl:grid flex flex-col xl:grid-cols-2 items-center justify-between gap-10'>
			<div className='text-white'>
				<h1 className='text-center text-3xl sm:text-5xl font-bold mb-10 tracking-[0.25rem]'>
					Main Title
				</h1>
				<p className='sm:text-xl tracking-[0.15rem]'>
					We are a brand from Ukraine, with a master with more than 3 years of
					experience. This means that the talent of our craftsman impresses more
					and more with each of his new products. So we decided to spread this
					creativity beyond Ukraine. Our goal is to make people happy and
					provide maximum satisfaction from every purchase. Smile more often and
					have a great shopping experience!
				</p>
			</div>
			<VideoPlayer />
		</div>
	);
};

export default FirstSection;
