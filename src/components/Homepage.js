import React from "react";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <img
        className="main-img"
        src={require("../images/background.avif")}
        alt=""
      />
    </div>
  );
};

export default Homepage;
