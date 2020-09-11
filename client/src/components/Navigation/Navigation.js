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
  return (
    <div id="mainNav">
      <nav className="navbar navbar-expand-md fixed-top">
        <a className="navbar-brand" id="navhead">
          Elevenses
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                to="/#about"
                activeClassName="selected"
                className="nav-link"
              >
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/#menuInfo"
                activeClassName="selected"
                className="nav-link"
              >
                Menu
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/#charInfo"
                activeClassName="selected"
                className="nav-link"
              >
                Characters
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/#availability"
                activeClassName="selected"
                class="nav-link"
              >
                Availability
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/bookings"
                activeClassName="selected"
                class="nav-link" id="bookBtn"
              >
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
