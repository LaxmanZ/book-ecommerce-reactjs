import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import TitleTypeTwo from '../../UI/titleTypeTwo/TitleTypeTwo';
import './bestSellingBook.css';

import { sellingBooksData } from '../../data/Data';

import TreeShape from '../../assets/treeshape.png';

const BestSellingBook = () => {
  return (
    <section className="bestSellingBook">
      <div className="treeshape">
        <img src={TreeShape} alt="Treeshape Image" />
      </div>

      {sellingBooksData.map((item) => (
        <div key={item.id} className="container bestselling-container">
          <div className="selling-book-left">
            <img src={item.img} alt="selling book image" />
          </div>
          <div className="selling-book-right">
            <TitleTypeTwo
              ClassName="sellingBookTitle"
              Title={'Best Selling Book'}
            />
            <div>
              <small>{item.infoTitleTop}</small>
            </div>
            <h3>{item.infoTitle}</h3>
            <p>{item.desc}</p>
            <h5>
              <span>{item.price}</span>
            </h5>
            <Link to={item.shopbtnLink} className="btn">
              <small>Shop It Now</small>
              <BsArrowRight />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BestSellingBook;
