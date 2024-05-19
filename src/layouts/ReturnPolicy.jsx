const points = [
	{
		title: '1. Returns',
		text: [
			'1.1 Eligibility',
			'We accept returns for products that meet the following criteria:',
			'• The item is unused and in the same condition as when it was received.',
			'• The item is in its original packaging.',
			'• The item was purchased directly from our Website.',
			'1.2 Time Frame',
			'You may initiate a return within [insert number] days of the date of purchase.',
		],
	},
	{
		title: '2. Non-Returnable Items',
		text: [
			'Certain items are not eligible for return, including:',
			'• Personalized or customized items.',
			'• Items marked as final sale.',
			'• Perishable goods.',
			'• Downloadable software or digital products.',
		],
	},
	{
		title: '3. Return Process',
		text: [
			'To initiate a return, please follow these steps:',
			'• Contact our customer service team at [insert email address or phone number].',
			'• Provide your order number, the name of the product you wish to return, and the reason for the return.',
			'• Wait for instructions on how to proceed with the return.',
		],
	},
	{
		title: '4. Shipping Costs',
		text: [
			'Customers are responsible for the cost of return shipping, unless the return is due to a mistake on our part or a defective product.',
		],
	},
	{
		title: '5. Refunds',
		text: [
			'Once we receive and inspect the returned item, we will notify you regarding the status of your refund. If the return is approved, a credit will be issued to your original method of payment.',
		],
	},
	{
		title: '6. Exchanges',
		text: [
			'We do not currently offer exchanges. If you wish to exchange a product, please follow the return process outlined in section 3 and place a new order for the desired item.',
		],
	},
	{
		title: '7. Damaged or Defective Items',
		text: [
			'If you receive a damaged or defective item, please contact us immediately. We will provide instructions on how to proceed with a return or replacement.',
		],
	},
];

const ReturnPolicy = () => {
	return (
		<>
			<div className=''>
				<h1 className='md:text-2xl text-xl font-bold tracking-[0.5rem] mb-4 text-[#F9C430] text-center'>
					RETURN POLICY
				</h1>
				<h4 className='font-bold tracking-[0.25rem] text-center text-xl mb-8'>
					This Return Policy describes the terms and conditions for returning
					products purchased. from. By making a purchase, you agree to the terms
					of this Return Policy.
				</h4>
				<div>
					{points.map(({ title, text }) => (
						<div key={title}>
							<h4 className='font-bold my-4 md:text-lg text-base'>{title}</h4>
							{text.map(item => (
								<p
									key={item}
									className='text-justify md:text-base text-sm my-2'
								>
									{item}
								</p>
							))}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default ReturnPolicy;
