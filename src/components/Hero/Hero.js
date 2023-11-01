import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CarCard from '../CardCar/CardCar';

const Hero = () => {
  const [carsData, setCarsData] = useState([]);
  const carState = useSelector((state) => state.car.cars);

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
        console.log('Cars Data:', data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchData();
  }, [carState]);

  return (
    <div className="d-flex flex-column justify-content-center vh-100 w-100">
      <div className="text-center">
        <div className="hero-title">
          <h2>LATEST MODELS</h2>
          <p className="text-black-50">Please Select a Car Model</p>
        </div>
        <div className="mt-5">
          <CarCard cars={carsData} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
