import React from 'react';
import './Tools.scss';
import { toolsUse,toolsLearn } from '../../data/tools.js';

function Tools() {
    return (
      <section className="tools-section">
        <div className="tools-section-container">
          <div className="tools-item">
            <h1 className="tools-heading">Technologies I Use</h1>
            <div className="tools-icon">
              {toolsUse.map((tools) => (
                <div key={tools.id} className="tools-icon-item">
                  <img
                    src={tools.tech}
                    alt=""
                    className="tools-icon-item-image"
                  />
                  <p className="tools-icon-item-text">{tools.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="tools-item">
            <h1 className="tools-heading">Currently Learning</h1>
            <div className="tools-icon tools-modify">
              {toolsLearn.map((tools) => (
                <div key={tools.id} className="tools-icon-item">
                  <img
                    src={tools.tech}
                    alt=""
                    className="tools-icon-item-image"
                  />
                  <p className="tools-icon-item-text">{tools.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}

export default Tools
