import React from 'react'
import { useStateValue } from './StateProvider';
import "./css/checkout.css"
import CheckoutProduct from "./CheckoutProduct.jsx"
import Subtotal from "./Subtotal.jsx"

const Checkout = () => {
    const [{basket}] = useStateValue();
    return (
      <div className="checkout">
      <div className ="checkout_left">
          <img
            className="checkout_ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/OHL/Mar_HSS/Clearance_1500x300_gifud.gif"
            alt="checkOut image"
          />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket.To buy one or more items click to
              "Add to basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title"> Your shopping basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                name={item.name}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        )}
        </div>
        {basket.length > 0 && (
          <div className="checkout_right">
           
            <Subtotal />
          </div>
        )}
      </div>
    );
}

export default Checkout
