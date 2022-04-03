import React from "react";

const ItemCart = ({ source, itemName, price, qty }) => {
  return (
    <div className="cart-item-container">
      <img src={require("../images/products/" + source + ".jpg")} alt="" />
      <h2>{itemName}</h2>
      <h3>${price}</h3>
      <div className="item-quantity">
        <button>-</button>
        <span>{qty}</span>
        <button>+</button>
      </div>
    </div>
  );
};

export default ItemCart;
