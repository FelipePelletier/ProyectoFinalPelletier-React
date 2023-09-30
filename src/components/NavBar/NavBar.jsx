import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navContainer">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>STATEOFJOY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("/category/hoodies")}>
                  Hoodies
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/category/remeras")}>
                  Remeras
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/category/gorras")}>
                  Gorras
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget />
      </Navbar>
    </div>
  );
};

export default NavBar;
