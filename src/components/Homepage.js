import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { Typewriter } from "react-simple-typewriter";

const Homepage = () => {
  const [numItems, setNumItems] = useState(0);
  const [itemsCart, setItemsCart] = useState([]);

  return (
    <div>
      <Navbar numItems={numItems} itemsCart={itemsCart} />
      <p className="typewriter">
        <Typewriter
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={100}
          delaySpeed={1500}
          words={["COMMITTED.", "DISCIPLINED.", "FOCUSED."]}
        />
      </p>
      <img
        className="main-img"
        src={require("../images/background.avif")}
        alt=""
      />
    </div>
  );
};

export default Homepage;
