import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../../data/Data';
import Logo from '../../assets/logo.png';
import './navbar.css';

import { VscMenu } from 'react-icons/vsc';
import { GrClose } from 'react-icons/gr';
import { FiUser } from 'react-icons/fi';
import { VscSearch } from 'react-icons/vsc';
import { BsBag } from 'react-icons/bs';
import { useState } from 'react';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  if (innerWidth < 1024) {
    window.addEventListener('scroll', () => {
      document.querySelector('.nav-links').classList.add('navLinksHide');
      setIsNavShowing(false);
    });
  }
  window.addEventListener('scroll', () => {
    document
      .querySelector('nav')
      .classList.toggle('navShadow', window.scrollY > 0);
  });
  return (
    <nav>
      <div className="container nav-container">
        {/* Left Side  */}
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>

        {/* Nav-Links  */}
        <ul
          className={`nav-links ${
            isNavShowing ? 'navLinkShow' : 'navLinksHide'
          }`}
        >
          {navLinks.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Nav-Right  */}
        <div className="nav-right">
          <Link target="_blank" className="management-icons" to="*">
            <FiUser />
          </Link>
          <Link target="_blank" className="management-icons" to="*">
            <BsBag />
          </Link>
          <Link target="_blank" className="management-icons" to="*">
            <VscSearch />
          </Link>

          <button
            className="menu-button"
            onClick={() => setIsNavShowing(!isNavShowing)}
          >
            {!isNavShowing ? <VscMenu /> : <GrClose />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
