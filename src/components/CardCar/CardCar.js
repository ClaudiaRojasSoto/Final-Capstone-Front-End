/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCards, Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import CarDetails from '../CarDetails/CarDetails';
import { deleteCar } from '../../redux/slices/carSlice';
import './cardcar.css';

const CarCard = ({ cars }) => {
  const dispatch = useDispatch();
  const deleteMode = useSelector((state) => state.car.deleteMode);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showCarDetails, setShowCarDetails] = useState(false);
  const breakpoints = {
    768: {
      slidesPerView: 3,
    },
  };

  const handleCarClick = (car) => {
    setSelectedCar(car);
    setShowCarDetails(true);
  };

  const handleDeleteCar = (carId) => {
    dispatch(deleteCar(carId));
  };

  const handleGoBack = () => {
    setSelectedCar(null);
    setShowCarDetails(false);
  };

  return (
    <div className="slide-container">
      {!showCarDetails && (
        <div className="text-center ">
          <div className="hero-title">
            <h2>LATEST MODELS</h2>
            <p className="  text-black-50">Please Select a Car Model</p>
          </div>
        </div>
      )}
      {showCarDetails ? (
        <CarDetails car={selectedCar} onGoBack={handleGoBack} />
      ) : (
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
              <div className="h-100 car-card">
                <img src={car.image_url} alt={car.name} />
                <h6 className="card-name">{car.name}</h6>
                <div className="custom">
                  <p className="m-0 mb-3 p-0 text-black-50 text-size long-description custom-h">{car.description}</p>
                  <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => handleCarClick(car)}>
                    View Details
                  </button>
                </div>
                {deleteMode && (
                  <div className="">
                    <button type="button" className="btn btn-outline-danger btn-sm my-1" onClick={() => handleDeleteCar(car.id)}>
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default CarCard;
