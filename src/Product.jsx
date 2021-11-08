import React from 'react'
import "./css/product.css"
import { useStateValue } from './StateProvider';

function Product({id,name,image,rating,price}) {
    const [{},dispatch] = useStateValue();
  let addToBasket = ()=>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        name:name,
        price:price,
        rating:rating,
      }
    })
  }
    return (
      <div className="product">
          <div className="product_info">

        <p>{name}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
             <p>⭐</p>
            ))}
        </div>
          </div>
        <img src={image} alt="product" />
        <button onClick={
          addToBasket
        }>Add to basket</button>
      </div>
    );
}

export default Product
