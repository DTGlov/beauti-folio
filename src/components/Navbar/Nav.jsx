import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
// import NavItems from '../NavItems/NavItems';
import './Nav.scss';
import Sidebar from '../Sidebar/Sidebar';

function Nav() {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className="big-nav">
      <header className="header">
        <nav className="nav">
          <div className="nav-logo">
            <p>DTGLOVER</p>
          </div>
          <div className="nav-lg">
            <a href="#skills">Skills</a>
            <a href="#projects">Works</a>
            <a href="#Contact">Contact Me</a>
          </div>
          <div
            className="nav-mobile"
            onClick={() => {
              console.log('clicked');
              setToggleNav(!toggleNav);
            }}
          >
            <FontAwesomeIcon icon={faBars} className="nav-bar fa-lg" />
          </div>
        </nav>
      </header>
      {/* <NavItems hideNav={hideNav} /> */}
      <Sidebar toggleNav={toggleNav} setToggleNav={setToggleNav} />
    </div>
  );
}

export default Nav;
