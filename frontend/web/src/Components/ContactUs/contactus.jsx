// src/components/ContactUs.jsx

import React, { useState } from 'react';
import './contactus.css'; // CSS for Contact Us page styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'All fields are required.' });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    // Mock submission
    setStatus({ type: 'loading', message: 'Submitting...' });

    setTimeout(() => {
      console.log('Form data:', formData);
      setStatus({ type: 'success', message: 'Your message has been sent successfully!' });

      // Clear form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <div className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-group">
          <label htmlFor="contact-name">Name:</label>
          <div className="contact-input-wrapper">
            <input
              type="text"
              id="contact-name"
              name="name"
              className="contact-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="contact-form-group">
          <label htmlFor="contact-email">Email:</label>
          <div className="contact-input-wrapper">
            <input
              type="email"
              id="contact-email"
              name="email"
              className="contact-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="contact-form-group">
          <label htmlFor="contact-message">Message:</label>
          <div className="contact-textarea-wrapper">
            <textarea
              id="contact-message"
              name="message"
              className="contact-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="contact-button-wrapper">
          <div className="contact-button" onClick={handleSubmit}>Submit</div>
        </div>
      </div>

      {status && (
        <div className={`contact-status-message ${status.type}`}>
          {status.message}
        </div>
      )}
    </div>
  );
};

export default ContactUs;
