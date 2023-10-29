import React from 'react';
import { Link } from 'react-router-dom';
import './session.css';

const Session = () => (
  <div className="vh-100 d-flex justify-content-center align-items-center">
    <div className="custom-blur border p-4 rounded-5 text-center">
      <h1 className="mb-5">Welcome!! Please Log First</h1>
      <div className="mb-3">
        <Link to="/login" className="btn btn-primary me-3">Iniciar sesión</Link>
        <Link to="/signup" className="btn btn-secondary">Registrarse</Link>
      </div>
    </div>
  </div>
);

export default Session;
