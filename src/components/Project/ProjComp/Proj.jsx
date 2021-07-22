import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Proj.scss';

function Proj({title, details, tools, img, projecturl, github,icon }) {
    return (
      <div className="proj-section">
        <div data-aos="fade-up" className="proj-container">
          <div className="proj-trick">
          <div className="proj-heading">
            <h1 className="proj-heading-title">{title}</h1>
            <img src={icon} alt="icon" className="proj-heading-icon" />
          </div>
          <p className="proj-details">{details}</p>
          <div className="proj-tools">
            {tools.map((tool, idx) => (
              <p className="proj-tools-item" key={idx}>
                {tool}
              </p>
            ))}
          </div>
          <div className="project-link">
            <a href={projecturl} target="_blank" rel="noreferrer">
              <span>Visit {title}</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
          <div className="project-link">
            <a href={github} target="_blank" rel="noreferrer">
              <span>View Code</span>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          </div>
          <div className="proj-img-container">
            <img
              src={img}
              alt="project img"
              className="proj-img-container-img"
            />
          </div>
        </div>
      </div>
    );
}

export default Proj
