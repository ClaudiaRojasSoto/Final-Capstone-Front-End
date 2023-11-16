import React from 'react';
import { Link } from 'react-router-dom';
import './session.css';

const Session = () => (
  <div className="container">
    <div className="row justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <div className="login-form border p-4 rounded-5 text-center">
          <h3 className="mb-5">Welcome!! Please Log First</h3>
          <div className="mb-3 btn-container">
            <Link to="/login" className="btn btn-primary me-3">Login</Link>
            <Link to="/signup" className="btn btn-secondary">SignUp</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Session;
