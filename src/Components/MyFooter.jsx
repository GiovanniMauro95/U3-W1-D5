import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs="auto">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <i className="bi bi-facebook fs-3"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <i className="bi bi-instagram fs-3"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <i className="bi bi-youtube fs-3"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">
              <i className="bi bi-twitter fs-3"></i>
            </a>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={3} sm={6} className="mb-3">
            <p>Audio and Subtitles</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
            <div className="mt-4">
              <Button variant="dark" className="border-light text-light">
                Service Code
              </Button>
              <p className="mt-3 mb-0">© 1997-2023 Netflix, Inc.</p>
            </div>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notices</p>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
          </Col>
          <Col md={3} sm={6} className="mb-3">
            <p>Gift Cards</p>
            <p>Terms of Use</p>
            <p>Corporate Information</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;


