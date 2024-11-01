// src/pages/ProjectsPage.js
import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './ProjectsPage.css';

const projects = [
  { title: 'Pneumonia Classification Web App', description: 'This Streamlit web application allows users to classify chest X-ray images to detect pneumonia. The app uses a pre-trained machine learning model to predict whether an uploaded X-ray image shows signs of pneumonia.', link: 'https://github.com/ARIHARAN-KC/pneumonia-classification-ML-web' },
  { title: 'Online project tracking system', description: 'To handle the final year project for academic. ', link: 'https://github.com/ARIHARAN-KC/online_project_tracking_system-flask' },
  { title: 'Sales-Analysis-report', description:'Pie Chart (Customer Segments): Displays sales by customer segment (Corporate, Home Office, Small Business). Line Chart (Sales Over Time): Shows sales fluctuations over a specific period. KPIs (Key Performance Indicators): Large numbers representing quantity ordered, total sales, and profit. Bar Chart (Product Sub-Categories): Lists sales by product sub-category. Map (State or Province): Geographical distribution of sales across U.S. states. Bar Chart (Sales by Region): Divided into Central, East, South, and West regions. Another Pie Chart (Sales by Region): Similar to the first one. This dashboard provides valuable insights for decision-making based on sales performance.', link:'https://github.com/ARIHARAN-KC/Sales-Analysis-report'}
];

function ProjectsPage() {
  return (
    <section className="projects-page">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
