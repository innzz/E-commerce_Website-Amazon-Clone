import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateValue } from '../StateProvider'

function Subtotal() {
    const [{basket}] = useStateValue();
    let subTotal = 0;
    for (let index = 0; index < basket.length; index++) {
     subTotal += basket[index].price;
        
    }
  return (
      <div className="subtotal">
          <CurrencyFormat 
              renderText={(value)=>(
                  <>
                  <p>
                      Subtotal ({basket?.length} items):
                      <strong>{subTotal}</strong>
                  </p>
                  <small className='subtotal_gift'>
                      <input type="checkbox" />This order contains gift
                  </small>
                  </>
              )}
              decimalScale={2}
              value={0}
              displayType={"text"}
              thousandSeparator={true}
              prefix={'₹'}
          />

          <button>Proceed to Checkout</button>
      </div>
  )
}

export default Subtotal