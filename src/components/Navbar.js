import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GiMountains } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";

const Navbar = ({ numItems, itemsCart }) => {
  const navigate = useNavigate();

  return (
    <div>
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
          <div className="cart-icon-container">
            <div className="nav-cart">
              <FaShoppingCart />
            </div>
            <h2>{numItems}</h2>
          </div>
        </div>
      </div>
      <Cart itemsCart={itemsCart} />
    </div>
  );
};

export default Navbar;
