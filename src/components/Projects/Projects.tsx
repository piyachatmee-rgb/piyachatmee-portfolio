import React from 'react';
import './Projects.css';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const projects = [
  {
    title: 'Digital Performance & Funnel Analysis',
    description: 'Led customer journey analysis at Ogilvy, identifies drop-off points using multi-step lead funnel data to prioritize optimization.',
    tags: ['GA4', 'GTM', 'CDP'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Interactive Looker Studio Dashboards',
    description: 'Built and maintained real-time dashboards at EVme Plus for monitoring product and business performance.',
    tags: ['Looker Studio', 'BigQuery', 'SQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'ETL Workflow Automation',
    description: 'Designed Python and Airflow workflows at Conicle to extract behavioral insights from BigQuery.',
    tags: ['Python', 'Airflow', 'BigQuery'],
    github: '#',
    demo: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured <span className="glow-text">Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-visual">
                {/* Abstract visualization placeholder */}
                <div className="project-viz-placeholder"></div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="link-icon"><FaGithub size={20} /></a>
                  <a href={project.demo} className="link-icon"><ExternalLink size={20} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
