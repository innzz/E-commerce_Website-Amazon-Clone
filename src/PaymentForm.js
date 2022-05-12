import React from 'react';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function PaymentForm() {
    const [{basket,user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
  return (
    <form >
                        <CardElement />

                        <div className="payment_priceContainer">
                        <CurrencyFormat 
                            renderText={(value)=>(
                                <>
                                    <h3>Order Total: {value}</h3>
                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={'₹'}
                        />
                        {/* <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p>:"Buy Now"}</span>
                        </button> */}
                        <button >
                            <span>Buy Now</span>
                        </button>
                        </div>
                    </form>
  )
}

export default PaymentForm