import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleDeleteMode } from '../../redux/slices/carSlice';
import './sidebar.css';
import carRental from './carRental.png';
import 'boxicons';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(toggleDeleteMode());
  };

  return (
    <>
      <div className="picture">
        <img src={carRental} alt="logo" />
      </div>
      <ul className="flex-column mt-3 nav fs-6 no-pad">
        <li className="nav-item">
          <Link to="/reserve" className="nav-link active text-black" aria-current="page" aria-label="Reserve Model">
            RESERVE MODEL
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black reservation-text" aria-label="My Reservations" href="/user_reservations">MY RESERVATIONS</a>
        </li>
        <li className="nav-item">
          <Link to="/addcar" className="nav-link active text-black" aria-label="Add Car">ADD CARS</Link>
        </li>
        <li className="nav-item">
          <button type="button" onClick={handleDeleteClick} className="nav-link text-black" aria-label="Delete Car">DELETE CAR</button>
        </li>
      </ul>
      <div className="align-items-end d-flex justify-content-evenly mb-3 custom-grow">
        <a href="enlace-de-twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <box-icon type="logo" name="twitter" />
        </a>
        <a href="enlace-de-facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <box-icon type="logo" name="facebook" />
        </a>
        <a href="enlace-de-google" target="_blank" rel="noopener noreferrer" aria-label="Google">
          <box-icon type="logo" name="google" />
        </a>
        <a href="enlace-de-vimeo" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
          <box-icon type="logo" name="vimeo" />
        </a>
        <a href="enlace-de-pinterest" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
          <box-icon type="logo" name="pinterest-alt" />
        </a>
      </div>
    </>
  );
};

export default Sidebar;
