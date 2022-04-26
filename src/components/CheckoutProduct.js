import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@mui/icons-material/Star';
import { removeFromBasket } from '../Action';
import { useStateValue } from '../StateProvider';


function CheckoutProduct({id,image,price,title,rating}) {
    // eslint-disable-next-line
    const [{basket},dispatch] = useStateValue();

    const removeItem = ()=>{
        dispatch(removeFromBasket(id));
    }
  return (
    <div className='checkoutProduct'>
        <img src={image} alt="" className="checkoutProduct_image" />
        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduct_price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {Array(rating).fill().map((_,i) => ( <StarIcon key={i}/>
                ))}
            </div>
            <button className="checkoutProduct_removeButton" onClick={removeItem}>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct