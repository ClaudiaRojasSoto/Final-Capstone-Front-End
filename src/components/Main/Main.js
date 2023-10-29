import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Hero from '../Hero/Hero';
import Login from '../session/Login';

const Main = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-3 bg-white d-flex flex-column justify-content-between vh-100 rigth-border">
        <Sidebar />
      </div>
      <div className="col-9 bg-white d-flex flex-column justify-content-between vh-100 rigth-border">
        <Login />
        <Hero />
      </div>
    </div>
  </div>
);

export default Main;
