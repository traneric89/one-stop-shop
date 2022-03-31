import React from "react";

const Cart = ({ itemsCart }) => {
  const totalPrice = () => {
    let total = itemsCart.reduce((accumulator, currentTotal) => {
      return accumulator + currentTotal.price;
    }, 0);
    return total;
  };

  return (
    <div className="cart-container">
      <div className="display-cart-items">img</div>
      <div className="checkout">
        <h1>Total: {totalPrice()}</h1>
        <div className="cart-buttons">
          <button className="checkout-btn">Checkout</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
