import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

import { SidebarData } from '../SidebarData';

import './Navbar.css';

// import { NavBarContainer, StyledLink } from './styles';

export default function NavBar() {
  const [sidebar, setSidebar] = useState();

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <IconContext.Provider value={{ color: '#FFF' }}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars" onClick={showSidebar}>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item) => (
            <li key={Math.random()} className={item.cName}>
              <Link to={item.path} onClick={showSidebar}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}
