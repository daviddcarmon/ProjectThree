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
      <nav class="navbar navbar-expand-md fixed-top">
        <a class="navbar-brand" id="navhead">
          Elevenses
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink
                to="/#about"
                activeClassName="selected"
                className="nav-link">
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/#menuInfo"
                activeClassName="selected"
                className="nav-link">
                Menu
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/#charInfo"
                activeClassName="selected"
                className="nav-link">
                Characters
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/#availability"
                activeClassName="selected"
                class="nav-link">
                Availability
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/booking"
                activeClassName="selected"
                class="nav-link">
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
