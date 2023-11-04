import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import {
  registerAsync,
  selectRegisterLoading,
  selectRegisterError,
} from '../../redux/slices/registerSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectRegisterLoading);
  const error = useSelector(selectRegisterError);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(registerAsync({ name, email, password })).then((success) => {
      if (success) {
        navigate('/');
      }
    });
  };

  return (
    <>
      <button className="border-1 btn m-2 rounded-circle" onClick={() => navigate('/')} type="button">
        Back
      </button>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <form onSubmit={handleSignUp} className="col-12 col-sm-8">
            <div className="login-form">
              <h3 className="mb-4">SignUp</h3>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

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

              <button type="submit" className="btn btn-primary mb-3">
                SignUp
              </button>

              {loading && <div className="loading-message">Register user...</div>}
              {error && <div className="error-message">{error}</div>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
