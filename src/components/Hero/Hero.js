import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CarCard from '../CardCar/CardCar';
import './hero.css';

const Hero = () => {
  const [carsData, setCarsData] = useState([]);
  const carState = useSelector((state) => state.car.cars);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/cars', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Error fetching cars');
        }

        const data = await response.json();
        setCarsData(data);
      } catch (error) {
        throw new Error('Error fetching cars');
      }
    };

    fetchData();
  }, [carState]);

  const handleCarClick = (carId) => {
    navigate(`/car-details/${carId}`);
  };

  return (
    <div className="d-flex flex-column justify-content-center nav-show mt-4">
      <div className="text-center top-mobile mt-1">
        <div className="margin-desktop">
          <CarCard cars={carsData} onCarClick={handleCarClick} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
