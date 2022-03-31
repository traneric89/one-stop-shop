import React from "react";

const Goggles = ({ onClick, source, itemName, price }) => {
  return (
    <div className="items goggles">
      <div className="item" onClick={() => onClick(source, itemName, price)}>
        <img src={require("../images/products/" + source + ".jpg")} alt="" />
        <h2>{itemName}</h2>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Goggles;