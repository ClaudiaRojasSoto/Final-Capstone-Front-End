import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  registerAsync,
  selectRegisterLoading,
  selectRegisterError,
} from '../../redux/slices/registerSlice';
import './session.css';

const SignUp = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectRegisterLoading);
  const error = useSelector(selectRegisterError);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(registerAsync({ name, email, password }));
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <form onSubmit={handleSignUp} className="login-form">
            <h3 className="mb-4">SignUp</h3>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary mb-3">
              Registrarse
            </button>

            {loading && <div className="loading-message">Registrando usuario...</div>}
            {error && <div className="error-message">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
