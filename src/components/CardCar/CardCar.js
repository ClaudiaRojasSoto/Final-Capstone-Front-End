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

const CarCard = ({ cars }) => (

  <div className="slide-container">
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      modules={[Navigation, EffectCards]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {cars.map((car) => (
        <SwiperSlide key={car.id}>
          <div className="h-100">
            <div>
              <img
                style={{ minHeight: '70px', minWidth: '70px', objectFit: 'cover' }}
                src={car.image_url}
                alt={car.name}
              />
            </div>
            <p>{car.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

);

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
