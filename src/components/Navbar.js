import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GiMountains } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";

const Navbar = ({ numItems, itemsCart }) => {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);

  const displayCart = () => {
    setShowCart(true);
  };

  const removeDisplayCart = () => {
    setShowCart(false);
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
          <div className="cart-icon-container">
            <div className="nav-cart">
              <FaShoppingCart onClick={displayCart} />
            </div>
            <h2 onClick={displayCart}>{numItems}</h2>
          </div>
        </div>
      </div>
      {showCart ? (
        <Cart itemsCart={itemsCart} onClick={removeDisplayCart} />
      ) : null}
    </div>
  );
};

export default Navbar;
