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
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
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
