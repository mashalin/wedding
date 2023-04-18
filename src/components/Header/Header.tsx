import { ReactElement } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css";
import { Link } from "react-router-dom";

export const Header = (): ReactElement => {
  return (
    <Navbar className="navbar" expand="xl">
      <Container>
        <Navbar.Toggle
          className="navbar__toggle"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse className="navbar__collapse" id="basic-navbar-nav">
          <Nav className="nav">
            <Nav.Link className="nav__link" href="#home">
              О нас
            </Nav.Link>
            <Nav.Link className="nav__link" href="#eventProgram">
              Программа мероприятия
            </Nav.Link>
            <Nav.Link className="nav__link" href="#dressCode">
              Dress code
            </Nav.Link>
            <Nav.Link className="nav__link" href="#menu">
              Меню
            </Nav.Link>
            <Nav.Link className="nav__link" href="#transport">
              Как добраться
            </Nav.Link>
            <Nav.Link className="nav__link" href="#andAlso">
              А ещё...
            </Nav.Link>
            <Link to={"/admin"}>Admin</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
