import React from "react";

const Mission = () => {
  return (
    <div className="mission-div">
      <h1>Our Mission</h1>
      <h2 className="subheading">
        To create the best performing products using sustainable materials so we
        can all enjoy the beautiful mountains our planet has to offer.
      </h2>
      <div className="missions">
        <div className="mission">
          <h2>DURABLE</h2>
          <img src={require("../images/mountains.jfif")} alt="" />
          <h3>
            The equipment we provide is made to last in the toughest of terrains
            all around the world.
          </h3>
        </div>
        <div className="mission">
          <h2>SUSTAINABLE</h2>
          <img src={require("../images/sustain.jpeg")} alt="" />
          <h3>
            We make it a promise to use sustainable materials in the
            manufacturing of all our products.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Mission;
