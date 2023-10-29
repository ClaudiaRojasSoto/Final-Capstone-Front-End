import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import { loginAsync, selectLoading, selectError } from '../../redux/slices/loginSlice';
import './login.css';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginAsync(email, password)).then((success) => {
      if (success) {
        navigate('/home');
      }
    });
  };

  return (
    <>
      <button className="border-1 btn m-2 rounded-circle" onClick={() => navigate('/session')} type="button">
        Back
      </button>

      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          {loading && <div className="loading-message">Login...</div>}
          {error && <div className="error-message">Login Error</div>}
          <form className="login-form col-7" onSubmit={handleLogin}>
            <h2 className="text-center mb-4">SignUp</h2>
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
            <button type="submit" className="btn btn-primary">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
