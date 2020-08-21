import React from "react";
import img from "../images/";

function About() {
  return (
    <>
      <section className="aboutCard">
        <h4 className="aboutHead">Lorem ipsum.</h4>
        <p className="aboutBody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img className="aboutImg" src={img} alt="partyImg" />
      </section>
    </>
  );
}

export default About;
