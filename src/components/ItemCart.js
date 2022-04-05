import React from "react";

const ItemCart = ({
  source,
  itemName,
  price,
  qty,
  id,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className="cart-item-container">
      <img src={require("../images/products/" + source + ".jpg")} alt="" />
      <h2>{itemName}</h2>
      <h3>${price}</h3>
      <div className="item-quantity">
        <button onClick={() => onDecrement(id)}>-</button>
        <span>{qty}</span>
        <button onClick={() => onIncrement(id)}>+</button>
      </div>
    </div>
  );
};

export default ItemCart;
