import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Hero from '../Hero/Hero';
import SidebarNav from '../Sidebar/SidebarNav';
import './main.css';

const Main = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-2 col-3-md bg-white d-flex flex-column justify-content-between rigth-border side-hide">
        <Sidebar />
      </div>
      <div className="d-none d-show">
        <SidebarNav />
      </div>
      <div className="col-10 col-9-md bg-white d-flex flex-column justify-content-between vh-100 rigth-border">
        <Hero />
      </div>
    </div>
  </div>
);

export default Main;
