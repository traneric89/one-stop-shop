import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Goggles from "./Goggles";
import Snowboards from "./Snowboards";

const Catalogue = () => {
  const [showGoggles, setShowGoggles] = useState(true);
  const [showSnowboards, setShowSnowboards] = useState(true);

  const displayGoggles = () => {
    setShowSnowboards(false);
    setShowGoggles(true);
  };

  const displaySnowboards = () => {
    setShowGoggles(false);
    setShowSnowboards(true);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="selection">
          <h2 onClick={displayGoggles}>Goggles</h2>
          <h2 onClick={displaySnowboards}>Snowboards</h2>
        </div>
        <div className="item-container">
          {showGoggles ? <Goggles /> : null}
          {showSnowboards ? <Snowboards /> : null}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
