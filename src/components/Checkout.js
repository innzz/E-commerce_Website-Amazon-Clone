import React from 'react';
import { useState , useEffect} from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from '../StateProvider';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function Checkout() {
  // eslint-disable-next-line
  const [{basket,user},dispatch] = useStateValue();
  const [basketItems,setBasketItems] = useState(null);

  useEffect(() => {
    if(basket.length === 0){
      setBasketItems('Your basket is empty!');
    }else{
      setBasketItems(null);
    }
  }, [basket])
  

  
  return (
    <div className="checkout">
        <div className="checkout_left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout_ad" />

            <div className="checkout_title">
              <h3>Hello, {!user?'Guest':user.email}</h3>
                <h2>Your Shopping Basket</h2>
                {basketItems && 
                <div className="emptyCart">
                  <h4>{basketItems}</h4>
                  <div className="svg">

                  <RemoveShoppingCartIcon style={{width:"50px",height:"40px"}}/>
                  </div>
                </div>
                }
                {basket?.map((item,index) => <CheckoutProduct
                key={index}
                 id={item.id} 
                 image={item.image}
                 title={item.title}
                 price={item.price}
                 rating={item.rating}
                 />)}
            </div>
        </div>

        <div className="checkout_right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout