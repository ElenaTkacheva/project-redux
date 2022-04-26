import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';
import CartItem from "./CartItem";
import StripeContainer from "../../Stripe/StripeContainer";
import { useState } from "react";

const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    
    return (
      <div className="cartIcon" key={cartItems.id}>
        <img src="cart.png" alt="cart" width="50px" />
        <h3>Total price: $ {totalPrice}</h3>
        {cartItems.map((cartItem, index) => (
          <CartItem key={index} cartItem={cartItem} />
        ))}
  
      </div>
    );
}

export default Cart;