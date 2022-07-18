import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar({ toggleNav, setToggleNav }) {
  const handleCloseSidebar = () => {
    setToggleNav(false);
  };
  return (
    <aside className={` sidebar ${toggleNav ? 'active' : ''}`}>
      <figure className="sidebar__logo" onClick={handleCloseSidebar}>
        {/* <img src={close} alt="close button" /> */}
        <FontAwesomeIcon
          icon={faTimes}
          size={'lg'}
          color="#7ebaf0"
          className="cross"
        />
      </figure>
      <ul className="sidebar__links">
        <li className="sidebar__links-item">
          <a href="#skills">
            <span>00</span> <span>Skills</span>
          </a>
        </li>
        <li className="sidebar__links-item">
          <a href="#projects">
            <span>01</span> <span>Works</span>
          </a>
        </li>
        <li className="sidebar__links-item">
          <a href="#contact">
            <span>02</span> <span>Contact</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
