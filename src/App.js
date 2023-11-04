/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main/Main';
import Session from './components/session/Session';
import Login from './components/session/Login';
import Signup from './components/session/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarForm from './components/CarForm/CarForm';
import ReservationList from './components/ReservationList/ReservationList';
import ReservePageFromDetails from './components/ReservePage/ReservePageFromDetails';
import ReservePageFromSideBar from './components/ReservePage/ReservePageFromSideBar';
import carBgImage from './components/session/car-bg.png';

const App = () => {
  const [bgColor, setBgColor] = useState('orange');
  const [bgImage, setBgImage] = useState(carBgImage);
  return (
    <Router>
      <div style={{
        backgroundColor: bgColor, minHeight: '100vh', backgroundImage: `url(${carBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center',
      }}
      >
        <Routes>
          <Route path="/" element={<Session />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Main />} />
          <Route path="/addcar" element={<CarForm />} />
          <Route path="/user_reservations" element={<ReservationList />} />
          <Route path="/reserve/:carId" element={<ReservePageFromDetails />} />
          <Route path="/reserve" element={<ReservePageFromSideBar setBgColor={setBgColor} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
