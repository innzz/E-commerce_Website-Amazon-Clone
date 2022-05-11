import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import './Product.css';
import { useStateValue } from '../StateProvider';
import {addToBasketAction} from '../Action'

function Product({id,title,price,image,rating,type}) {
  // eslint-disable-next-line
  const [{ basket },dispatch] = useStateValue();
  const addToBasket = ()=>{
        
        //Sending action through dispatch making action file
        dispatch(addToBasketAction(id,title,price,image,rating,type));
      }

  return (
    <div className='product'>
      <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
          <span>&#8377;</span>
              <strong>{price}</strong>
          </p>
          <div className="product_rating">
              {Array(rating).fill().map((_,i)=>(
                  <StarIcon key={i}/>
              ))}
          </div>
      </div>
          <img src={image} alt=""/>

          <button onClick={addToBasket} >Add to Basket</button>
    </div>
  )
}

export default Product
