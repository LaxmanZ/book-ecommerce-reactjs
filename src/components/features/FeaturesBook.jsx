import TitleTypeOne from '../../UI/titleTypeOne/TitleTypeOne';
import './featuresbooks.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { BsArrowReturnRight } from 'react-icons/bs';

import { featuredBooksData } from '../../data/Data';
import { Link } from 'react-router-dom';

const breakpoints = {
  1024: {
    slidesPerView: 4,
    spaceBetweenSlides: 30,
  },
  768: {
    slidesPerView: 3,
    spaceBetweenSlides: 20,
  },
  480: {
    slidesPerView: 2,
    spaceBetweenSlides: 10,
  },
  0: {
    slidesPerView: 1,
    spaceBetweenSlides: 0,
  },
};

const FeaturesBooks = () => {
  return (
    <section className="featured">
      <div className="container features-book-container">
        <TitleTypeOne
          TitleTop={'Some Quality Items'}
          Title={'Featured Books'}
        />

        {/* FeaturedBooks Slider  */}
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          modules={[Pagination]}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          breakpoints={breakpoints}
        >
          {featuredBooksData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="featurebook-box">
                <Link to={item.imgLlink} className="featurebook">
                  <img src={item.img} alt="featuredbook image" />
                </Link>
                <div className="featurebook-info">
                  <Link to={item.nameLink}>
                    <h5>{item.name}</h5>
                  </Link>
                  <div>
                    <small>{item.writer}</small>
                  </div>
                  <h5>
                    <span>{item.price}</span>
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="feature-border container"></div>
          {/* swiper pagination  */}
          <div className="swiper-pagination"></div>
          {/* view all products Button  */}
          <Link to="*" className="btn feature-btn">
            View All Products
            <BsArrowReturnRight />
          </Link>
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturesBooks;
