/* eslint-disable */
import React from 'react';

const ContactPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="contact-popup">
      <div className="popup-content">
        <h2>Contact Information</h2>
        <div className="contact-info">
          <p><strong>Name:</strong> Brad Weatherby</p>
          <p><strong>Phone:</strong> <a href="tel:+16159699839">(615) 969-9839</a></p>
          <p><strong>Email:</strong> <a href="mailto:bweatherby1@gmail.com">bweatherby1@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/brad-weatherby1/" target="_blank" rel="noopener noreferrer">linkedin.com/in/brad-weatherby</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/bweatherby1" target="_blank" rel="noopener noreferrer">github.com/bweatherby1</a></p>
        </div>
        <button className="popup-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};export default ContactPopup;
