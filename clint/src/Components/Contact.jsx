
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post('http://localhost:5000/api/contact', formData);
        setSuccessMessage(response.data.message);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } catch (error) {
        console.error('Error sending contact form:', error);
      }
    }
  };

  return (
    <div className="container contact-container mt-5">
      <h2 className="contact-heading mb-5">Get In Touch</h2>
      <div className="row">
        <div className="col-md-6 contact-form-container">
          <h5 className="contact-intro">Feel free to reach out with any questions or work opportunities!</h5>
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <form onSubmit={handleSubmit} className="p-4 rounded shadow">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
          </form>
        </div>
        <div className="col-md-6 contact-info-container d-flex flex-column justify-content-center align-items-center">
          <div className="contact-info p-4 rounded shadow text-center">
            <h5 className="contact-info-heading">Contact Information</h5>
            <p><FaEnvelope /> sanketmane2255@gmail.com</p>
            <p><FaPhone /> +91 9356980773</p>
            <p><FaMapMarkerAlt /> Hinjawadi, Pune-413113</p>
            <div className="social-icons mt-4">
              <a href="https://facebook.com" className="social-icon"><FaFacebook /></a>
              <a href="https://twitter.com" className="social-icon"><FaTwitter /></a>
              <a href="https://linkedin.com" className="social-icon"><FaLinkedin /></a>
              <a href="https://github.com/SanketMane2255" className="social-icon"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

