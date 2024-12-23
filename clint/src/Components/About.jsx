// src/Components/About.jsx
import React from 'react';
import { FaCode, FaLaptopCode, FaGlobe } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="About" className="about-section py-5">
      <div className="container">
        <h1 className="text-center mb-5 about-heading">About Me</h1>
        <div className="about-card p-5 shadow-lg rounded">
          <h2 className="text-center mb-4 section-title">Who I Am</h2>

          <div className="about-content">
            <div className="about-icons text-center mb-4">
              <FaCode className="icon" />
              <FaLaptopCode className="icon" />
              <FaGlobe className="icon" />
            </div>
            <p className="text-justify">
              Hello! I'm <span className="highlight">Sanket Mane</span>, a passionate MERN Full Stack Developer focused on building efficient, scalable applications. With expertise in both front-end and back-end development, I specialize in React, Node.js, Express, and MongoDB.
            </p>
            <p className="text-justify">
              I’m dedicated to creating intuitive, responsive user interfaces and robust server-side architectures. My goal is to write clean, high-quality code that prioritizes performance, security, and a seamless user experience.
            </p>
            <p className="text-justify">
              Outside of development, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community. I’m constantly driven by new challenges and committed to continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
