// src/Components/Navbar.jsx
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import './Navbar.css';

const Navbar = ({ toggleTheme, isDark }) => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isDark ? 'navbar-dark' : 'navbar-light'} py-3 shadow-sm`}>
      <div className="container">
        <a className="navbar-brand fs-3 fw-bold text-primary" href="#home">
          MyPortfolio
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fs-5 fw-semibold" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 fw-semibold" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 fw-semibold" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 fw-semibold" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 fw-semibold" href="#services">Services</a>
            </li>
          </ul>

          <Button
            variant="outline-primary"
            className="me-3 fw-bold px-4 contact-btn"
            onClick={scrollToContact}
          >
            Contact
          </Button>

          <div
            className={`theme-toggle ${isDark ? 'text-light' : 'text-dark'}`}
            onClick={toggleTheme}
            style={{ cursor: 'pointer' }}
          >
            {/* {isDark ? <FaSun /> : <FaMoon />} */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
