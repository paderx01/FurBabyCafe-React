import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../app/assets/img/shiba-starbucks.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar dark color="dark" sticky="top" expand="md">
      <NavbarBrand className="ms-5" href="/">
        <img
          src={logo}
          alt="Main Logo"
          className="float-start"
          width="700"
          height="300"
        />
        <h1 className="mt-1">Fur Baby Cafe</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i className="fa fa-home fa-lg" /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/aboutus">
              <i className="fa fa-info fa-lg" /> About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/Adoption">
              <i className="fa fa-address-card fa-lg" /> Adoption
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
