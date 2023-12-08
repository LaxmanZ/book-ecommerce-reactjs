import { Link } from 'react-router-dom';
import TitleTypeOne from '../../UI/titleTypeOne/TitleTypeOne';
import { lettestArticleData } from '../../data/Data';
import './latestArticle.css';

import { ImFacebook } from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';

const LatestArticle = () => {
  return (
    <section className="latestArticle">
      <div className="container latest-article-container">
        <TitleTypeOne
          Title={'Latest Articles'}
          TitleTop={'Read Our Articles'}
        />

        <div className="latest-article-content">
          {lettestArticleData.map((item) => (
            <article key={item.id} className="latest-article">
              <div className="article-image">
                <img src={item.image} alt="article Image" />
              </div>
              <div className="article-info">
                <h5>{item.date}</h5>
                <Link to={item.titLink}>
                  <h3>{item.title}</h3>
                </Link>
              </div>
              <div className="latest-article-social">
                <p>{item.inspiration}</p>
                <div className="article-social">
                  <a href={item.fbLink}>
                    <ImFacebook />
                  </a>
                  <a href={item.instLink}>
                    <FiInstagram />
                  </a>
                  <a href={item.twitaLink}>
                    <RiTwitterXLine />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link to={'*'} className="btn btn-border">
          read all article <BsArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default LatestArticle;
