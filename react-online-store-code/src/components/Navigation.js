import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { Nav, Navbar } from "react-bootstrap";
import StoreLogo from "./images/StoreLogo.png";

function Navigation() {
  return (
    <header className="navigation">
      {/* Container for controlling the layout */}
      <div className="container-fluid px-auto me-5">
        {/* Bootstrap Navbar with custom styling */}
        <Navbar bg="myKhaki" variant="light" sticky="top">
          {/* Logo */}
          <Navbar.Brand className="logo me-5">
            <img src={StoreLogo} width="55px" height="50px" alt="Logo" />
            Gym <span>STORE</span>
          </Navbar.Brand>
          {/* Navigation links */}
          <Nav className="nav">
            <NavLink to="/" exact>
              Home
            </NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
          </Nav>
        </Navbar>
      </div>
    </header>
  );
}

export default Navigation;
