import React from 'react';
import './Skills.scss';
import frontend from '../../assets/browsing.svg';
import database from '../../assets/cloud-database.svg';

function Skills() {
    return (
      <section className="skill-section" id="skills">
        <div data-aos="fade-up" className="skills-container">
          <h1 className="skills-container-heading">My Skills</h1>
          <div className="skills-container-items">
            {/* <div>
              Icons made by{" "}
              <a href="https://www.freepik.com" title="Freepik">
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div> */}
            <div className="skill-item">
              <div className="skills-container-items-blob">
                <div className="skills-container-items-blob-item"></div>
                <img
                  src={frontend}
                  alt="frontend-web-development"
                  className="skills-container-items-svg"
                />
              </div>
              <div>
                <h1 className=" skill-details-heading">
                  Frontend Web Development
                </h1>
                <p className="skill-details-para">
                  The hallmark of every brilliant frontend engineer is the
                  ability to convert web designs and wireframes into responsive
                  web applications whilst following all the necessary best
                  practices. I combine <span>React Js</span> with UI
                  libraries and frameworks like
                  <span> Tailwind CSS and SCSS</span> to bring UI designs to
                  life.
                </p>
              </div>
            </div>
            <div className="skill-item">
              <div className="skills-container-items-blob">
                <div className="skills-container-items-blob-item"></div>
                <img
                  src={database}
                  alt="frontend-web-development"
                  className="skills-container-items-svg"
                />
              </div>
              <div>
                <h1 className=" skill-details-heading">
                  Backend Web Development
                </h1>
                <p className="skill-details-para">
                  As a backend developer I strive to build,test, and deploy maintainable and secure API's. My goto technologies for  building scalable backend applications include but not limited to <span>ExpressJs/Golang</span> and authentication services like
                  <span> FireBase and Google Oauth.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Skills
