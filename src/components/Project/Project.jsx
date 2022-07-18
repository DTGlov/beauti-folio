import React from 'react';
import Coinbase from './Coinbase/Coinbase';
import First from './First/First';
// import Fourth from './Fourth/Fourth';
import Instrail from './Instrail/Instrail';
import Portal from './Portal/Portal';
import './Project.scss';
import Space from './Space/Space';
// import Second from './Second/Second';
// import Third from './third/Third';

function Project() {
  return (
    <section className="project-section" id="projects">
      <div className="project-container">
        <h1 className="project-container-heading">Works</h1>
        <Instrail />
        <Portal />
        <First />
        <Space />
        <Coinbase />
        {/* <Fourth /> */}
        {/* <Second />
        <Third /> */}
      </div>
    </section>
  );
}

export default Project;
