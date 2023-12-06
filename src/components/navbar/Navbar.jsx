import { Link, NavLink } from 'react-router-dom';
import { navLinks, navRight } from '../../data/Data';
import Logo from '../../assets/logo.png';
import './navbar.css';

import { VscMenu } from 'react-icons/vsc';
import { GrClose } from 'react-icons/gr';
// import { FiUser } from 'react-icons/fi';
// import { VscSearch } from 'react-icons/vsc';
// import { BsBag } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        {/* Left Side  */}
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>

        {/* Nav-Links  */}
        <ul className="nav-links">
          {navLinks.map((item, i) => (
            <li key={i}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>

        {/* Nav-Right  */}
        <div className="nav-right">
          {navRight.managements.map((items, i) => (
            <Link
              key={i}
              target="_blank"
              className="management-icons"
              to={items.link}
            >
              {items.icon}
            </Link>
          ))}

          <button className="menu-button btn btn-border">
            <VscMenu />
            <GrClose />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
