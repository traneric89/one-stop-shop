import React from "react";
import { GiMountains } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          Slope Shredders <GiMountains />
        </h1>
      </div>
      <div className="navbar-info">
        <h2>Catalogue</h2>
        <h2>4 Bag</h2>
      </div>
    </div>
  );
};

export default Navbar;
