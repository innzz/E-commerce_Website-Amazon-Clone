import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import './Product.css';
import { useStateValue } from '../StateProvider'

function Product({id,title,price,image,rating}) {
  const [{ basket },dispatch] = useStateValue();
  console.log(basket)
  const addToBasket = ()=>{
        dispatch({
          type:'ADD_TO_BASKET',
          item:{
            id:id,
            title:title,
            price:price,
            image:image,
            rating:rating
          }
        })
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
