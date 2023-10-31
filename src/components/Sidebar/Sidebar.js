import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import carRental from './carRental.png';
import 'boxicons';

function Sidebar() {
  return (
    <>
      <div className="picture">
        <img src={carRental} alt="logo" />
      </div>
      <ul className="flex-column mt-3 nav">
        <li className="nav-item">
          <a className="nav-link active text-black  " aria-current="page" href="#Models">RESERVE MODEL</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black " href="/user_reservations">MY RESERVATIONS</a>
        </li>
        <li className="nav-item">
          <Link to="/addcar" className="nav-link active text-black">ADD CAR</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black " href="#testdrive">DELETE CAR</a>
        </li>
      </ul>
      <div className="align-items-end d-flex justify-content-evenly mb-3 custom-grow">
        <a href="enlace-de-twitter" target="_blank" rel="noopener noreferrer">
          <box-icon type="logo" name="twitter" />
        </a>
        <a href="enlace-de-facebook" target="_blank" rel="noopener noreferrer">
          <box-icon type="logo" name="facebook" />
        </a>
        <a href="enlace-de-google" target="_blank" rel="noopener noreferrer">
          <box-icon type="logo" name="google" />
        </a>
        <a href="enlace-de-vimeo" target="_blank" rel="noopener noreferrer">
          <box-icon type="logo" name="vimeo" />
        </a>
        <a href="enlace-de-pinterest" target="_blank" rel="noopener noreferrer">
          <box-icon type="logo" name="pinterest-alt" />
        </a>
      </div>

    </>
  );
}

export default Sidebar;
