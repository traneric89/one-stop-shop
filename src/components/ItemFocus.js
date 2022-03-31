import React from "react";

const ItemFocus = ({ source, itemName, price }) => {
  return (
    <div className="focus-item">
      <div className="left">
        <div className="focus-image">
          <img src={require("../images/products/" + source + ".jpg")} alt="" />
        </div>
        <div className="focus-details">
          <h1>{itemName}</h1>
          <h2>{price}</h2>
        </div>
      </div>
      <div className="right">
        <h2>Product Details</h2>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            iusto.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            molestias.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            molestiae cupiditate fugit.
          </li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
        </ul>
      </div>
    </div>
  );
};

export default ItemFocus;
