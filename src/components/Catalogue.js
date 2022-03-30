import React from "react";
import Navbar from "./Navbar";
import Goggles from "./Goggles";

const Catalogue = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="selection">
          <h2>Snowboards</h2>
          <h2>Skiis</h2>
          <h2>Goggles</h2>
        </div>
        <div className="item-container">
          <Goggles />
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
