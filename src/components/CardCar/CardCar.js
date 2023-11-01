import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// Core modules imports are same as usual
import { Navigation } from 'swiper/modules';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import 'swiper/css';
import 'swiper/css/navigation';

const CarCard = ({ cars }) => (

  <div style={{ maxHeight: '200px' }}>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {cars.map((car) => (
        <SwiperSlide key={car.id}>

          <div className="h-100">
            <div>
              <img
                src={car.image_url}
                alt={car.name}
              />
            </div>

            <p>{car.description}</p>

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
