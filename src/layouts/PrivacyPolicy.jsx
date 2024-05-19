const points = [
	{
		title: '1. Information We Collect',
		text: [
			'1.1 Personal Information ',
			'- Name',
			'- Email',
			'- address',
			'- Phone number',
			'- Address Any other information you voluntarily provide',
			'1.2 Non-Personal Information:',
			'- Browser type',
			'- Operating system',
			'- IP address',
			'- Demographic information',
		],
	},
	{
		title: '2. How We Use Your Information',
		text: [
			'We may use the information we collect for various purposes, including but not limited to:',
			'- Providing, maintaining, and improving the Website',
			'- Sending newsletters, promotional materials, and updates',
			'- Responding to inquiries and providing customer support',
			'- Monitoring and analyzing user behavior and trends',
		],
	},
	{
		title: '3. Cookies and Tracking Technologies',
		text: [
			'We use cookies and similar tracking technologies to enhance user experience and for analytical purposes. You can set your browser to refuse cookies or to alert you when cookies are being sent. However, please note that certain features of the Website may not function properly without cookies.',
		],
	},
	{
		title: '4. Third-Party Disclosure',
		text: [
			'We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.',
		],
	},
	{
		title: '5. Security',
		text: [
			'We take reasonable measures to protect your personal information from unauthorized access, use, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.',
		],
	},
	{
		title: '6. Children’s Privacy',
		text: [
			'Our Website is not directed at individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected personal information from a child under the age of 13, please contact us immediately.',
		],
	},
	{
		title: '7. Changes to this Privacy Policy',
		text: [
			'We reserve the right to update this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on the Website.',
		],
	},
];

const PrivacyPolicy = () => {
	return (
		<>
			<div className=''>
				<h1 className='md:text-2xl text-xl font-bold tracking-[0.5rem] mb-4 text-[#F9C430] text-center'>
					PRIVACY POLICY
				</h1>
				<h2 className='md:text-xl text-lg font-bold tracking-[0.25rem] mb-4  text-center'>
					This Privacy Policy describes how https://thisforweed.com collects,
					uses, and shares information obtained from users of our website
					https://thisforweed.com (the "Website"). By accessing or using the
					Website, you agree to the terms of this Privacy Policy.
				</h2>
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

export default PrivacyPolicy;
