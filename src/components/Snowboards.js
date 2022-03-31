import React from "react";

const Snowboards = ({ onClick, source, itemName, price }) => {
  return (
    <div className="item snowboards">
      <img src={require("../images/products/" + source + ".jpg")} alt="" />
      <h2>{itemName}</h2>
      <h3>{price}</h3>
      <div className="button-container">
        <button className="add-cart" onClick={onClick}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Snowboards;
