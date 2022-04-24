import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import './Product.css'

function Product({title,price,image,rating}) {
  return (
    <div className='product'>
      <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
              <small>$</small>
              <strong>{price}</strong>
          </p>
          <div className="product_rating">
              {Array(rating).fill().map((_,i)=>(
                  <StarIcon />
              ))}
          </div>
      </div>
          <img src={image} alt=""/>

          <button>Add to Basket</button>
    </div>
  )
}

export default Product
