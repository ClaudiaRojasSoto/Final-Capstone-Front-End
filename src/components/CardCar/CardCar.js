import React from 'react';
import PropTypes from 'prop-types';
// Core modules imports are same as usual
import { EffectCards, Navigation } from 'swiper/modules';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';
import './cardcar.css';
// Styles must use direct files imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CarCard = ({ cars }) => {
  const breakpoints = {
    768: {
      slidesPerView: 3,
    },

  };

  return (
    <div className="slide-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, EffectCards]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={breakpoints}
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <div className="h-100">
              <div>
                <img src={car.image_url} alt={car.name} />
              </div>
              <h6>{car.name}</h6>
              <div className="text-secondary description-text">{car.description}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

CarCard.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CarCard;
