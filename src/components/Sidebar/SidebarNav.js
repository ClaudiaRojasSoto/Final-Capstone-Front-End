import { Navbar, Nav } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import carRental from './carRental.png';
import 'boxicons';
import './sidebar.css';

function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" expanded={expanded}>
      <Navbar.Brand>
        <img src={carRental} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto d-flex flex-row justify-content-between  navbar-nav">
          <Nav.Link as={Link} to="#Models" onClick={() => setExpanded(false)}>
            RESERVE MODEL
          </Nav.Link>
          <Nav.Link as={Link} to="/user_reservations" onClick={() => setExpanded(false)}>
            MY RESERVATIONS
          </Nav.Link>
          <Nav.Link as={Link} to="/addcar" onClick={() => setExpanded(false)}>
            ADD CAR
          </Nav.Link>
          <Nav.Link href="#testdrive" onClick={() => setExpanded(false)}>
            DELETE CAR
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default Sidebar;
