import React from "react";
import Navbar from "./Navbar";

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
        <div className="items">
          <div className="item">1</div>
          <div className="item">2</div>
          <div className="item">3</div>
          <div className="item">4</div>
          <div className="item">5</div>
          <div className="item">6</div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
