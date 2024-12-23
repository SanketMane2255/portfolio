// src/Components/Services.js
import React from 'react';
import './Services.css'; // Import the CSS file for styles

const services = [
  {
    title: "Full-Stack Development",
    description: "Building scalable web applications using the MERN stack (MongoDB, Express.js, React, and Node.js) to deliver dynamic and responsive solutions.",
  },
  {
    title: "API Development & Integration",
    description: "Designing and implementing RESTful APIs for efficient client-server communication and integrating third-party services seamlessly.",
  },
  {
    title: "Responsive Web Design",
    description: "Ensuring websites are fully responsive across all devices, providing a seamless and user-friendly experience.",
  },
  {
    title: "Database Management",
    description: "Experienced in database design, management, and optimization with MongoDB to handle large volumes of data efficiently.",
  },
  {
    title: "Performance Optimization",
    description: "Optimizing application performance with best practices in code efficiency, caching, and asynchronous processing.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-container py-5">
      <div className="container">
        <h2 className="services-heading mb-5">MERN Development Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="service-card shadow-sm rounded">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
