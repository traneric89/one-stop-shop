import React from "react";

const Snowboards = () => {
  return (
    <div className="items snowboards">
      <div className="item">
        <img
          src={require("../images/snowboards/25524216_ONE_COLOUR_3.jfif")}
          alt=""
        />
        <h2>Burton Blaze 2.0</h2>
        <h3>$649.00</h3>
      </div>
      <div className="item">
        <img
          src={require("../images/snowboards/25524257_ONE_COLOUR_3.jfif")}
          alt=""
        />
        <h2>Burton Flight</h2>
        <h3>$850.00</h3>
      </div>
      <div className="item">
        <img
          src={require("../images/snowboards/25529454_ONE_COLOUR_3.jfif")}
          alt=""
        />
        <h2>K2 Altitutude</h2>
        <h3>$720.00</h3>
      </div>
      <div className="item">
        <img
          src={require("../images/snowboards/25529934_ONE_COLOUR_3.jfif")}
          alt=""
        />
        <h2>YES Triplet</h2>
        <h3>$1090.00</h3>
      </div>
      <div className="item">
        <img
          src={require("../images/snowboards/25530353_ONE_COLOUR_3.jfif")}
          alt=""
        />
        <h2>Libtech Angel</h2>
        <h3>$960.00</h3>
      </div>
    </div>
  );
};

export default Snowboards;
