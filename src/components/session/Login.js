import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync, selectLoading, selectError } from '../../redux/slices/loginSlice';
import './login.css';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginAsync(email, password));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
          <h2>LogIn</h2>
          {loading && <div className="loading-message">Iniciando sesión...</div>}
          {error && <div className="error-message">Error al iniciar sesión. Por favor, verifica tus credenciales.</div>}
          <form className="w-100" onSubmit={handleLogin}>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Login;
