import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GiMountains } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";

const Navbar = ({ numItems, itemsCart, onClick }) => {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);

  const displayCart = () => {
    setShowCart(true);
    onClick(true);
  };

  const removeDisplayCart = () => {
    setShowCart(false);
    onClick(false);
  };

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
          <div className="cart-icon-container" onClick={displayCart}>
            <div className="nav-cart">
              <FaShoppingCart />
            </div>
            <h2>{numItems}</h2>
          </div>
        </div>
      </div>
      {showCart ? (
        <Cart
          itemsCart={itemsCart}
          onClick={removeDisplayCart}
          className="cart-translate"
        />
      ) : null}
    </div>
  );
};

export default Navbar;
