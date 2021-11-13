import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

import "./Header.css";
const Header = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <Navbar className="cheader" expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink to="/">
              <img
                src="https://i.ibb.co/44vXvNm/logo-black-footer.png"
                alt=""
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/explore">Explore</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              {/* <NavLink to="/register">Register</NavLink> */}
            </Nav>
            {user?.email ? (
              <>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <button className="logout-button" onClick={logout}>
                  {user?.displayName}(Logout)
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
