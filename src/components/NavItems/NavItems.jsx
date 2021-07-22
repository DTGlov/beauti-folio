import React from 'react';
import './NavItems.scss';

function NavItems({ hideNav }) {
    return (
      <div className={hideNav ? "" : "hide"}>
        <div className="hidden">
          <ul>
            <li>
              <a href="#skills" className="list">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default NavItems
