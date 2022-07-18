import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.scss';

function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <h1 className="footer-copy">
        CopyRight &copy; {date.getFullYear()} DTGLOVER
      </h1>
      <div className="socials">
        <p>
          <a
            href="https://twitter.com/dt_glover"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/dtglover/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </p>
        <p>
          <a href="https://github.com/DTGlov" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
