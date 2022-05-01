import React, { useState } from 'react';
import '../components/PaymentStripe.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link} from 'react-router-dom';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';

function PaymentStripe() {
    const [{basket,user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);

    const handleOnChange = (e)=>{
        setDisabled(e.empty);
        setError(e.error?e.error.message:"")
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
                    <form onSubmit={handleOnSubmit}>
                        <CardElement  onChange={handleOnChange}/>  
                        <div className="payment_priceContainer">
                        <CurrencyFormat 
                            renderText={(value)=>(
                                <>
                                <p>
                                    Subtotal ({basket.length} items):
                                    <strong>{value}</strong>
                                </p>
                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={'₹'}
                        />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentStripe;