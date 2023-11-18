import React from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Navbar.Brand href="/">Rollup Markets</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavItem>
            <Link to="/" className="nav-link">
              Featured Markets
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/markets" className="nav-link">
              Market List
            </Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
