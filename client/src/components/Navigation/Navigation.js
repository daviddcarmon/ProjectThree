import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import "./Navigation.css";
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
  
    <div id="mainNav">
      {/* <Navbar expand="md">
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
      </Navbar> */}

{/* 
<header class="masthead mb-auto">
    <div class="inner">
      <h3 class="masthead-brand"><a href="/">Elevenses</a></h3>
      <nav class="nav nav-masthead justify-content-center">
      <NavLink to="/#about" activeClassName="selected" id="nav-link">About</NavLink>
      <NavLink to="/#menuInfo" activeClassName="selected" id="nav-link">
        Menu</NavLink>
        <NavLink to="/#charInfo" activeClassName="selected" id="nav-link">
                Characters
        </NavLink>
        <NavLink to="/#availability" activeClassName="selected" id="nav-link">
                Availability
        </NavLink>
        <NavLink to="/booking" activeClassName="selected" id="nav-link">
              Book Now!
          </NavLink>
     
        
      </nav>
    </div>
  </header> */}

<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="/">Elevenses</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          <NavLink to="/#about" activeClassName="selected"  className="nav-link">About</NavLink>
          </li>
          <li class="nav-item">
          <NavLink to="/#menuInfo" activeClassName="selected" className="nav-link">
        Menu</NavLink>
          </li>
          <li class="nav-item">
          <NavLink to="/#charInfo" activeClassName="selected" className="nav-link">
                Characters
        </NavLink>
          </li>
          <li class="nav-item">

          <NavLink to="/#availability" activeClassName="selected" class="nav-link">
                Availability
        </NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/booking" activeClassName="selected" class="nav-link">
              Book Now!
          </NavLink>
</li>
        </ul>
        
      </div>
    </nav>

    </div>
 
    
  );
};

export default Navigation;
