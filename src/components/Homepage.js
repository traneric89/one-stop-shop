import React from "react";
import NavbarHomepage from "./NavbarHomepage";
import { Typewriter } from "react-simple-typewriter";

const Homepage = () => {
  return (
    <div>
      <NavbarHomepage />
      <p className="typewriter">
        <Typewriter
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={100}
          delaySpeed={1500}
          words={["COMMITTED.", "DISCIPLINED.", "FOCUSED."]}
        />
      </p>
      <img
        className="main-img"
        src={require("../images/background.avif")}
        alt=""
      />
    </div>
  );
};

export default Homepage;
