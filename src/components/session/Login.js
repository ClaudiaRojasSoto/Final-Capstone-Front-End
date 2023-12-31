import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  loginAsync, selectLoading, selectError, selectData,
} from '../../redux/slices/loginSlice';
import './login.css';

const Login = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (data?.success) {
      navigate('/home');
    }
  }, [data, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginAsync(email, password));
  };

  return (
    <>
      <button className="border-1 btn m-2 rounded-circle btn-warning" onClick={() => navigate('/')} type="button">
        Back
      </button>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          {loading && <div className="loading-message text-bg-dark text-center w-50 z-2 rounded mb-2">Loading...</div>}
          {error && <div className="alert error-message text-bg-danger text-center w-50 z-1">Login Error</div>}
          <div className=" col-12 col-sm-8">
            <form className="login-form" onSubmit={handleLogin}>
              <h2 className="text-center mb-4">LogIn</h2>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
