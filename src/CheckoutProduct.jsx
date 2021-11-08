import React from "react";
import "./css/checkoutProduct.css"
import { useStateValue } from "./StateProvider";


const CheckoutProduct = ({ id, name, image, rating, price }) => {
    let [{},dispatch] = useStateValue();
    let removeFromBasket = ()=>{
    dispatch({
      type:"REMOVE_TO_BASKET",
      item:{
        id:id,
      }
    })
}
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_name"> {name}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      <button className ="checkoutProduct_button" onClick = {removeFromBasket}>Remove from Basket</button>
      </div>

    </div>
  );
};

export default CheckoutProduct;
