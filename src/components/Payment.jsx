import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Payment = ({ total , items }) => {
	const value = total;
    const item=items;
    var product="";
	const paypalOptions = {
		'client-id':'ASzNP2cQfLLOm53jn3o3MwQFfWFdixSsHqKvLU789CFIbmcgUOwZeM4EXaMieIpW0M20T6yhjobACw_R',
        currency: "USD"
	};
    
    //console.log(item);

    item.forEach(e => 
    //console.log(e.title)
        product=product+e.title+"  "+e.quantity+"pc,"+"\n"
    );
    //console.log(product);
    
    
	return (
		<PayPalScriptProvider options={paypalOptions}>
			<PayPalButtons
				createOrder={(data, actions) => {
					return actions.order.create({
						purchase_units:[{
                          description: product,
        amount: {
                
				value: value,
				}
        }  
                        ] 
          
					});
				}}
				onApprove={async (data, actions) => {
					const order = await actions.order.capture();
					console.log('order', order);

					handleApprove(data.orderID);
				}}
			/>
		</PayPalScriptProvider>
	);
};

export default Payment;
