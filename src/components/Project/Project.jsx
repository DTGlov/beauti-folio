import React from 'react';
import First from './First/First';
import './Project.scss';
import Second from './Second/Second';
import Third from './third/Third';

function Project() {
    return (
      <section className="project-section" id="projects">
        <div className="project-container">
          <h1 className="project-container-heading">My Projects</h1>
          <First />
          <Second />
          <Third />
        </div>
      </section>
    );
}

export default Project
