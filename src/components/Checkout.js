import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from '../StateProvider';
import FlipMove from 'react-flip-move';



function Checkout() {
  // eslint-disable-next-line
  const [{basket},dispatch] = useStateValue();
  return (
    <div className="checkout">
        <div className="checkout_left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout_ad" />

            <div className="checkout_title">
                <h2>Your Shopping Basket</h2>
                <FlipMove>
                {basket.map((item,index) => <CheckoutProduct
                key={index}
                 id={item.id} 
                 image={item.image}
                 title={item.title}
                 price={item.price}
                 rating={item.rating}
                 />)}
                 </FlipMove>
            </div>
        </div>

        <div className="checkout_right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout