import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import NavItems from '../NavItems/NavItems';
import './Nav.scss'

function Nav() {
      const [hideNav, sethideNav] = useState(false);
    return (
      <div className="big-nav">
        <header className="header">
          <nav className="nav">
            <div className="nav-logo">
              <p>DTGLOVER</p>
            </div>
            <div className="nav-lg">
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#Contact">Contact Me</a>
            </div>
            <div className="nav-mobile" onClick={() => sethideNav(!hideNav)}>
              <FontAwesomeIcon icon={faBars} className="nav-bar fa-lg" />
            </div>
          </nav>
            </header>
            <NavItems hideNav={ hideNav}/>
      </div>
    );
}

export default Nav
