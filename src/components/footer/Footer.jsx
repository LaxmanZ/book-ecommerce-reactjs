import { Link } from 'react-router-dom';
import { FootersLinksData } from '../../data/Data';
import './footer.css';

import { ImFacebook, ImBehance } from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';
import { GrLinkedinOption } from 'react-icons/gr';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer-container">
          {/* About Params  */}
          <div>
            <h4>About Us</h4>
            <ul className="about-params params-links">
              {FootersLinksData.Aboutus.map((item, id) => (
                <li key={id}>
                  <Link to={item.link}>{item.linkname}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover Params  */}
          <div>
            <h4>Discover Us</h4>
            <ul className="discoverParams params-links">
              {FootersLinksData.Discover.map((item, id) => (
                <li key={id}>
                  <Link to={item.link}>{item.linkname}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MyAccount Params  */}
          <div>
            <h4>MyAccount Us</h4>
            <ul className="myAccountParams params-links">
              {FootersLinksData.Myaccount.map((item, id) => (
                <li key={id}>
                  <Link to={item.link}>{item.linkname}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Params  */}
          <div>
            <h4>Help Us</h4>
            <ul className="helpParams params-links">
              {FootersLinksData.Help.map((item, id) => (
                <li key={id}>
                  <Link to={item.link}>{item.linkname}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container copyright-container">
            <p>© 2023-2024 TechZoro. All rights reserved.</p>

            <div className="footer-socials">
              <a href="https://www.instagram.com">
                <GrLinkedinOption />
              </a>
              <a href="https://www.instagram.com">
                <FiInstagram />
              </a>
              <a href="https://www.facebook.com">
                <ImFacebook />
              </a>
              <a href="https://www.twitter.com">
                <RiTwitterXLine />
              </a>
              <a href="https://www.twitter.com">
                <ImBehance />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
