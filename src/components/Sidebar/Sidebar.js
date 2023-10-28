import React from 'react';
import './sidebar.css';
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
          <a className="nav-link active text-black  " aria-current="page" href="#Models">MODELS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black " href="#LifeStyle">LIFE STYLE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black " href="#Shop">SHOP</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black " href="#testdrive">TESTDRIVE</a>
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
