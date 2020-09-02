import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavHashLink as NavLink } from "react-router-hash-link";

const Navigation = () => {
  // const onSignIn = (googleUser) => {
  //   var profile = googleUser.getBasicProfile();
  //   console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log("Name: " + profile.getName());
  //   console.log("Image URL: " + profile.getImageUrl());
  //   console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  //   console.log(gapi);
  // };

  // const signOut = () => {
  //   console.log("signing out");
  //   var auth2 = gapi.auth2.GoogleAuth.signOut();
  //   auth2.signOut().then(function () {
  //     console.log("User signed out.");
  //   });
  // };
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggle = () => setIsOpen(!isOpen);
  return (
  
    <div id="mainNav" bg >
      <Navbar expand="md">
        <NavbarBrand href="/">Elevenses</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/#about" activeClassName="selected">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#menuInfo" activeClassName="selected">
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#charInfo" activeClassName="selected">
                Characters
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#availability" activeClassName="selected">
                Availability
              </NavLink>
            </NavItem>
            <NavLink to="/booking" activeClassName="selected">
              Book Now!
            </NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
 
    
  );
};

export default Navigation;
