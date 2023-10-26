import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
      <Link to="/">
          <i className="fas fa-home"></i> {/* Replace "Home" with the home icon */}
        </Link>
        <Link to="/support">
          <i className="fas fa-envelope"></i> {/* Replace "Support" with the envelope icon */}
        </Link>
        <Link to="/aboutus">
            <i className="fas fa-globe"></i>
        </Link>
      </div>
      <div className="company-description">
      <h2 className='about-us'>About Delta Communication Network:</h2>
        <p>
          Delta Communication is a provider of high-speed internet and cable services. 
          We are committed to delivering the best in connectivity, entertainment and customer support for our users.
        </p>
      </div>
      <div className="company-info">
      <Link to="/signup">
          <Button variant="dark" className="register-button">
            Register with Delta
          </Button>
        </Link>
        <p>Address: Plot no.23-F, 3rd floor Muhammad Ali Society, Karachi<br></br>&copy; 2023 Delta Communication Network. All rights reserved.</p>
        <p>Made by Burhan ❤️</p>
      </div>        
    </footer>
  );
};
  
  export default Footer;