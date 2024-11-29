import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Nav, Container,  } from 'react-bootstrap';
import NetflixLogo from "../assets/logo.png"

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" style={{ backgroundColor: '#221f1f' }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={NetflixLogo} alt="Logo" style={{ width: '100px', height: '55px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">TV Shows</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">Recently Added</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">My List</Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div id="kids" className="fw-bold text-white">KIDS</div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;