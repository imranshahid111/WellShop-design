import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css'

const Footor = () => {
  return (
<>
<footer className="footer py-5">
      <Container>
        <Row>
          
          <Col md={3} className="mb-3">
            <div>
              <img 
                src="/src/images/logo.png" 
                alt="Wellshop.pk" 
                className="footer-logo mb-2 header-logo"
              />
              <p>Online shopping in Pakistan from Amazon</p>
            </div>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/src/images/facebook.png" alt="Facebook" className="icon iicon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/src/images/twitter.png" alt="Twitter" className="icon iicon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/src/images/instagram.png" alt="Instagram" className="icon iicon" />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                <img src="/src/images/whatsapp.png" alt="WhatsApp" className="icon iicon" />
              </a>
            </div>
          </Col>

          <Col md={3} className="mb-3">
            <h5>POLICIES</h5>
            <ul className="list-unstyled">
              <li><a href="#about">ABOUT US</a></li>
              <li><a href="#shipping">SHIPPING & RETURN</a></li>
              <li><a href="#terms">TERMS AND CONDITIONS</a></li>
              <li><a href="#prohibited">PROHIBITED ITEMS</a></li>
              <li><a href="#payment">PAYMENT METHODS</a></li>
              <li><a href="#privacy">PRIVACY POLICY</a></li>
              <li><a href="#disclaimer">DISCLAIMER</a></li>
            </ul>
          </Col>

          
          <Col md={3} className="mb-3">
            <h5>OTHER LINKS</h5>
            <ul className="list-unstyled">
              <li><a href="#instock">IN STOCK</a></li>
              <li><a href="#brands">BRANDS</a></li>
              <li><a href="#custom-order">CUSTOM ORDER</a></li>
              <li><a href="#searches">SEARCHES</a></li>
            </ul>
          </Col>

          
          <Col md={3} className="mb-3">
            <h5>GET IN TOUCH</h5>
            <address>
              House No K-A 03 Khyber Colony <br />
              Zarar Shaheed Road Lahore Cantt, Pakistan <br />
              support@wellshop.pk<br />
              +92 323 4114799 <br />
              wellshop.pk
            </address>
          </Col>
        </Row>
      </Container>
    </footer>
    
</>  )
}

export default Footor