import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GiMountains } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ numItems }) => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo">
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          Slope Shredders <GiMountains />
        </h1>
      </div>
      <div className="navbar-info">
        <h2
          onClick={() => {
            navigate("/Catalogue");
          }}
        >
          Shop
        </h2>
        <div className="cart-container">
          <div className="nav-cart">
            <FaShoppingCart />
          </div>
          <h2>{numItems}</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
