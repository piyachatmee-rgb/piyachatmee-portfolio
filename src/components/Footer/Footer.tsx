import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} DA.Portfolio. All rights reserved.</p>
        <p>Built with React & Passion for Data.</p>
      </div>
    </footer>
  );
};

export default Footer;
