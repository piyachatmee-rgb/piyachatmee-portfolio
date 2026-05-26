import React from 'react';
import './Skills.css';
import { Database, BarChart2, PieChart, Code, Layout, Terminal } from 'lucide-react';

const skills = [
  { name: 'GA4 & GTM', icon: <Database size={24} />, level: 'Expert' },
  { name: 'Looker Studio & Tableau', icon: <BarChart2 size={24} />, level: 'Expert' },
  { name: 'SQL (BigQuery)', icon: <Terminal size={24} />, level: 'Advanced' },
  { name: 'CDP (Twilio Segment)', icon: <Layout size={24} />, level: 'Expert' },
  { name: 'Python & Airflow', icon: <Code size={24} />, level: 'Advanced' },
  { name: 'Amplitude', icon: <PieChart size={24} />, level: 'Advanced' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My <span className="glow-text">Tech Stack</span></h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <span className="skill-level">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
