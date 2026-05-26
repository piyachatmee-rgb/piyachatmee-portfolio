import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container about-content">
        <h2 className="section-title">About <span className="glow-text">Me</span></h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a <strong>Data Analytics Professional</strong> with 7+ years of experience across 
              digital analytics, customer journey, and performance measurement. I specialize in 
              translating customer behavior into actionable insights for strategic decision-making.
            </p>
            <p>
              My expertise includes designing and implementing end-to-end analytics tracking 
              frameworks across web, media, and lead funnels. I have a proven ability to lead 
              digital performance analysis using GA4, CDP (Twilio Segment), and BigQuery 
              to identify optimization efforts and prioritize business growth.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">7+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Years of Digital Focus</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">GPA 3.67</span>
              <span className="stat-label">First Class Honors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
