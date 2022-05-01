import React from 'react';
import '../components/Payment.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link} from 'react-router-dom';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
    const [{basket,user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const handleOnChange = ()=>{

    };

    const handleOnSubmit= ()=>{

    };

  return (
    <div className="payment">
        <div className="payment_container">
            <h1>
                Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
            </h1>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery address</h3>
                </div>
                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>Dadar East</p>
                    <p>Mumbai:400015</p>
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment_item">
                    {basket.map((item,index) => (
                        <CheckoutProduct 
                        key={index}
                        id={item.id} 
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}/>
                    ))}
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment_details">
                    {/* Stripe magic will be here */}
                    <form onSubmit={handleOnSubmit}>
                        <CardElement onChange={handleOnChange}/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment;