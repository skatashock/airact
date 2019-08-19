import React from "react"
import { Link, NavLink } from "react-router-dom"
import { Navbar, Nav, Container } from "react-bootstrap"

const Header = () => (
  <header>
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Company Directory
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/" exact>
              Personnels
            </Nav.Link>
            <Nav.Link as={NavLink} to="/departments">
              Departments
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

export default Header
