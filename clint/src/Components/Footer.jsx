import React from 'react';
import './Footer.css'; // Optional: Add styles for the footer
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Social icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content row">
          <div className="footer-links col-md-6 col-12">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/skills">Skills</a></li>
            </ul>
          </div>
          <div className="footer-social col-md-6 col-12 text-center">
            <h5>Connect</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/SanketMane2255" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p>&copy; {new Date().getFullYear()} Sanket Mane. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
