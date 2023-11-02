import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'; // Añadido
import { EffectCards, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { deleteCar } from '../../redux/slices/carSlice'; // Añadido
import './cardcar.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CarCard = ({ cars }) => {
  const dispatch = useDispatch();
  const deleteMode = useSelector((state) => state.car.deleteMode);

  const handleDeleteCar = (carId) => {
    // Añadido
    dispatch(deleteCar(carId));
  };

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
              <p>{car.name}</p>
              {deleteMode && (
                <button className="btn btn-outline-danger btn-sm" type="button" onClick={() => handleDeleteCar(car.id)}>Delete</button> // Añadido
              )}
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
      image_url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CarCard;
