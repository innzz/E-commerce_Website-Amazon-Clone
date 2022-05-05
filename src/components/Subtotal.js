import React from 'react';
import './Subtotal.css';
import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    const navigate = useNavigate();
    // eslint-disable-next-line
    const [{basket},dispatch] = useStateValue();
    
  return (
      <div className="subtotal">
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

          <button onClick={e=>navigate('/payment')}>Proceed to Checkout</button>
      </div>
  )
}

export default Subtotal