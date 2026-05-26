import React from 'react';
import './Contact.css';
import { Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In <span className="glow-text">Touch</span></h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-text">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your visions. Feel free to reach out through any of these platforms!
            </p>
            <div className="social-links">
              <a href="mailto:piyachatmee@gmail.com" className="social-item">
                <Mail size={24} /> <span>piyachatmee@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/piyachat-charuchinda/" className="social-item" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} /> <span>LinkedIn Profile</span>
              </a>
              <a href="tel:+66909322497" className="social-item">
                 <span>📞 09-0932-2497</span>
              </a>
            </div>
          </div>
          <div className="contact-form-placeholder">
            <div className="form-mock">
              <div className="form-line"></div>
              <div className="form-line"></div>
              <div className="form-line large"></div>
              <div className="form-button"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
