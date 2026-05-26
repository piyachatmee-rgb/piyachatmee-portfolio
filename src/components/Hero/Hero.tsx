import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="glow-text">Piyachat</span> <br />
            Data Analytics Manager
          </h1>
          <p className="hero-subtitle">
            7+ years of experience translating customer behavior into actionable insights 
            for strategic decision-making. Expert in GA4, CDP, and end-to-end tracking frameworks.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="abstract-chart">
            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
            <div className="bar bar-3"></div>
            <div className="bar bar-4"></div>
            <div className="bar bar-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
