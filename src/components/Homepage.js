import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";

const Homepage = () => {
  const [numItems, setNumItems] = useState(0);
  const [itemsCart, setItemsCart] = useState([]);

  return (
    <div>
      <Navbar numItems={numItems} itemsCart={itemsCart} />
      <img
        className="main-img"
        src={require("../images/background.avif")}
        alt=""
      />
    </div>
  );
};

export default Homepage;
