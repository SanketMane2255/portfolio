// src/Components/Home.jsx
import React from 'react';
import profile from '../Components/ID IMAGE.jpg';
import './Home.css';
import { FaGithub, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="Home" className="home-container d-flex align-items-center justify-content-center flex-column flex-md-row">
      {/* Text Section */}
      <div className="text-section text-center text-md-start">
        <h1 className="greeting">
          Hii, I'm <span className="highlight">Sanket Mane</span>
        </h1>
        <h2 className="title mb-3">
          A <span className="highlight1">MERN Full Stack Developer</span>
        </h2>
        <p className="description">
          I’m passionate about building robust web applications, specializing in front-to-back-end development.
          I focus on creating scalable solutions that deliver smooth user experiences.
        </p>

        {/* Social Icons */}
        <div className="social-icons mt-3 d-flex justify-content-center justify-content-md-start">
          <a href="https://github.com/SanketMane2255" target="_blank" rel="noopener noreferrer" className="icon-link"><FaGithub /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-link"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-link"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-link"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-link"><FaLinkedin /></a>
        </div>

        {/* Buttons */}
        <div className="button-group mt-4">
          <a href="https://drive.google.com/file/d/1eJYTEAwk1eRi_bawmkLR8Pk6VvaTzDL1/view?usp=sharing" download className="btn btn-outline-primary me-3 btn-custom">Download Resume</a>
          <a href="mailto:sanketmane2255@gmail.com" className="btn btn-primary btn-custom">E-mail</a>
        </div>
      </div>

      {/* Image Section */}
      <div className="image-section mt-4 mt-md-0 ms-md-5 text-center">
          <img src={profile} alt="MERN Full Stack Developer" className="profile-img shadow" />
        </div>
    </section>
  );
};

export default Home;
