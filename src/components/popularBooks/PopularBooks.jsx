import { useState } from 'react';
import TitleTypeOne from '../../UI/titleTypeOne/TitleTypeOne';
import { galleryData } from '../../data/Data';
import './popularBooks.css';

const PopularBooks = () => {
  const [activeButton, setActiveButton] = useState('all');
  const filterItems =
    activeButton === 'all'
      ? galleryData
      : galleryData.filter((item) => item.category === activeButton);

  const handleFilterChange = (category) => {
    setActiveButton(category);
  };
  return (
    <section className="popularBooks">
      <div className="container popularbooks-container">
        <TitleTypeOne
          TitleTop={'Some Quality Items'}
          Title={'Popular Books'}
          className={'popularbooks-title'}
        />

        {/* filter Tabs Button  */}
        <div className="filter-buttons">
          <button
            className={activeButton === 'all' ? 'active' : ''}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button
            className={activeButton === 'Business' ? 'active' : ''}
            onClick={() => handleFilterChange('Business')}
          >
            Business
          </button>
          <button
            className={activeButton === 'Technology' ? 'active' : ''}
            onClick={() => handleFilterChange('Technology')}
          >
            Technology
          </button>
          <button
            className={activeButton === 'Adventure' ? 'active' : ''}
            onClick={() => handleFilterChange('Adventure')}
          >
            Adventure
          </button>
          <button
            className={activeButton === 'Romantic' ? 'active' : ''}
            onClick={() => handleFilterChange('Romantic')}
          >
            Romantic
          </button>
          <button
            className={activeButton === 'Fictional' ? 'active' : ''}
            onClick={() => handleFilterChange('Fictional')}
          >
            Fictional
          </button>
        </div>

        {/* filter Books content  */}
        <div className="gallery">
          {filterItems.map((item) => (
            <div className="gallery-item" key={item.id}>
              <div className="popularbook-image">
                <img src={item.image} alt="Popularbook Image" />
              </div>
              <div className="popularbook-info">
                <h4>{item.name}</h4>
                <div>
                  <small>{item.writer}</small>
                </div>
                <h5>
                  <span>{item.price}</span>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBooks;
