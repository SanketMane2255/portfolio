// src/Components/Projects.js
import React, { useState } from 'react';
import './Projects.css'; // Import the CSS file for styles
import pro1 from '../Components/project-1.png'
import pro2 from '../Components/project-2.png'
import pro3 from '../Components/project-3.png'
import pro4 from '../Components/project-4.png'

const projects = [
  {
    title: 'Blog website',
    description: 'Created a blog website by using HTML,CSS,Bootstrap,Javascript,React.js,Mysql,node.js,express.js & performed CRUD operations in it .',
    link: 'https://github.com/SanketMane2255/blog-app-crud',
    image: pro1 // Update path if necessary
  },
  {
    title: 'E-commerce website',
    description: 'Feature-rich ecommerce app using React.js with browsing, filtering, and wishlist capabilities.',
    link: 'https://github.com/SanketMane2255/e-commerce-web',
    image: pro2 // Update path if necessary
  },
  {
    title: 'Information Dashboard',
    description: 'Created a employee info dashboard with the help of HTML,CSS,Bootstrap,JavaScript $ react.js performed CRUD operstion in it .',
    link: 'https://github.com/SanketMane2255/People-Dashboard',
    image: pro3 // Update path if necessary
  },
  {
    title: 'Recipe Finder',
    description: 'Created a website to find the dish with the help of name,filter with ingredients & we can add our favourite dish to wishlist.',
    link: 'https://github.com/SanketMane2255/recipe-app',
    image: pro4 // Update path if necessary
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDescription = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="projects-container py-5">
      <div className="container">
        <h2 className="projects-heading mb-5 text-center">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="project-card shadow-sm rounded">
                <img src={project.image} alt={project.title} className="project-image rounded-top" />
                <div className="p-3">
                  <h3 className="project-title mb-2">{project.title}</h3>
                  <p className="project-description">
                    {expandedProject === index ? project.description : `${project.description.substring(0, 70)}...`}
                  </p>
                  <button
                    className="btn btn-outline-primary btn-sm me-2"
                    onClick={() => toggleDescription(index)}
                  >
                    {expandedProject === index ? 'Read Less' : 'Read More'}
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    View Project
                  </a>
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
