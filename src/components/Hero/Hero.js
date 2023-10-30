import React from 'react';
import CarCard from '../CardCar/CardCar';

const hero = () => (
  <div>
    <div className="hero-title text-center">
      <h2>LATEST MODELS</h2>
      <p className="text-black-50">Please Select a Car Model</p>
    </div>
    <div>
      <CarCard />
    </div>
  </div>
);

export default hero;
