import React from "react";
import { useNavigate } from "react-router-dom";
import { GiMountains } from "react-icons/gi";

const Navbar = () => {
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
            navigate("/catalogue");
          }}
        >
          Catalogue
        </h2>
        <h2>4 Bag</h2>
      </div>
    </div>
  );
};

export default Navbar;
