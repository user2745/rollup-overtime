import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Nav variant="tabs" defaultActiveKey="1">
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
  )
}

export default Header
