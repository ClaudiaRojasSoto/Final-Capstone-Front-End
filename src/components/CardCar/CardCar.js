import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { useSelector, useDispatch } from 'react-redux';
import { EffectCards, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { deleteCar } from '../../redux/slices/carSlice';
import './cardcar.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CarCard = ({ cars }) => {
  const dispatch = useDispatch();
  const deleteMode = useSelector((state) => state.car.deleteMode);

  const handleDeleteCar = (carId) => {
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
              <h6 className="card-name">{car.name}</h6>
              <p className="m-0 mb-3 p-0 text-black-50 text-size long-description">{car.description}</p>
              {deleteMode && (
                <button className="btn btn-outline-danger btn-sm" type="button" onClick={() => handleDeleteCar(car.id)}>
                  Delete
                </button>
              )}
              {!deleteMode && (
                <Link to={`/car-details/${car.id}`} className="btn btn-outline-primary btn-sm">
                  View Details
                </Link>
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
