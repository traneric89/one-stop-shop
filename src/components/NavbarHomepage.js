import React from "react";
import { useNavigate } from "react-router-dom";
import { GiMountains } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

const NavbarHomepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar navbar-homepage">
        <div className="logo">
          <h1
            onClick={() => {
              navigate("/");
            }}
          >
            Slope Shredders <GiMountains />
          </h1>
        </div>
        <div className="navbar-info navbar-info-homepage">
          <h2
            onClick={() => {
              navigate("/Catalogue");
            }}
          >
            Shop
          </h2>
          <div className="homepage-cart-icon-container">
            <div className="nav-cart">
              <FaShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarHomepage;
