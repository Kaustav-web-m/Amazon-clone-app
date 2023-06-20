import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js" ;
import CheckoutProduct from "./CheckoutProduct.js";
import { useStateValue } from "./StateProvider";

function Checkout() {

   const [{ basket, user }] = useStateValue(); // ,dispatch removed

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/1-Topbanner_Desk7thApril212.jpg"
          alt="Checkout ad"
        />
        <div>
        <h3> Hello , {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct 
              id= {item.id}
              title= {item.title}
              image= {item.image}
              price= {item.price}
              rating= {item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
