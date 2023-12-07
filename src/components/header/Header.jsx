import { Link } from 'react-router-dom';
import { headerBooks } from '../../data/Data';
import './header.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import headerShape from '../../assets/header-shape.svg';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        {/* Header Swiper Slider  */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          modules={[Navigation, Pagination]}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            prevEl: '.button-prev-slide',
            nextEl: '.button-next-slide',
          }}
        >
          {headerBooks.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="header-wrapper container">
                <div className="header-left">
                  <h1>{item.title}</h1>
                  <p dangerouslySetInnerHTML={{ __html: item.info }}></p>
                  <Link className="btn btn-border" to={item.btnLink}>
                    Learn More
                  </Link>
                </div>
                <div className="header-right">
                  <img src={item.img} alt="swiper image" />
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* header Pagination  */}
          <div className="slider-button">
            <div className="button-prev-slide slidebutton">
              <GoArrowLeft />
            </div>
            <div className="button-next-slide slidebutton">
              <GoArrowRight />
            </div>
          </div>

          {/* header Pagination  */}
          <div className="container">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>

        {/* header Shape  */}
        <div className="header-shape">
          <img src={headerShape} alt="header shape" />
        </div>
      </div>
    </header>
  );
};

export default Header;
