import React from "react";  
import { Link } from "gatsby";
import { Navbar, Nav } from "react-bootstrap";
import "./navBar.css";

const CustomNavbar = ({ pageInfo, ...props }) => {
  return (
    <Navbar expand="xs">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activeKey={props.activePage}>
          <Nav.Link eventKey="home" href="/">Home</Nav.Link>
          <Nav.Link eventKey="visitor-centre" href="/visitor-centre/">Visitor Info</Nav.Link>
          <Nav.Link eventKey="podcast-alley" href="/podcast-alley/">Podcast Alley</Nav.Link>
          <Nav.Link eventKey="qr-castle" href="/qr-castle/">QR Castle</Nav.Link>
          <Nav.Link eventKey="drive-in" href="/drive-in/">Drive-Innovation Theater</Nav.Link>
          <Nav.Link eventKey="library" href="/library/">Library</Nav.Link>
          <Nav.Link eventKey="newsletter" href="/newsletter-depot/">Newsletter Depot</Nav.Link>
          <Nav.Link eventKey="epic-quest" href="/epic-quest/">Epic Quest</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar