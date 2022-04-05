import React from "react";
import ItemCart from "./ItemCart";
import uniqid from "uniqid";

const Cart = ({ itemsCart, onClick, onIncrement, onDecrement }) => {
  const totalPrice = () => {
    let total = itemsCart.reduce((currentTotal, nextTotal) => {
      return currentTotal + nextTotal.price * nextTotal.qty;
    }, 0);
    return total;
  };

  return (
    <div className="cart-container">
      <div className="display-cart-items">
        {itemsCart.map((item) => (
          <ItemCart
            key={uniqid()}
            source={item.source}
            itemName={item.itemName}
            price={item.price}
            qty={item.qty}
            id={item.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
      <div className="checkout">
        <h1>Total: ${totalPrice()}</h1>
        <div className="cart-buttons">
          <button className="checkout-btn btn">
            <span className="btn-text">Checkout</span>
          </button>
          <button className="cancel-btn btn" onClick={onClick}>
            <span className="btn-text">Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
