import React from "react";
import ItemCart from "./ItemCart";

const Cart = ({ itemsCart, onClick }) => {
  const totalPrice = () => {
    let total = itemsCart.reduce((accumulator, currentTotal) => {
      return accumulator + currentTotal.price;
    }, 0);
    return total;
  };

  return (
    <div className="cart-container">
      <div className="display-cart-items">
        {itemsCart.map((item) => (
          <ItemCart
            key={item.itemName}
            source={item.source}
            itemName={item.itemName}
            price={item.price}
          />
        ))}
      </div>
      <div className="checkout">
        <h1>Total: ${totalPrice()}</h1>
        <div className="cart-buttons">
          <button className="checkout-btn">Checkout</button>
          <button className="cancel-btn" onClick={onClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
