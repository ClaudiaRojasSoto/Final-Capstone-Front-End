import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync, selectLoading, selectError } from '../../redux/slices/loginSlice';

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
    <div>
      <h2>LogIn</h2>
      {loading && <div className="loading-message">Iniciando sesión...</div>}
      {error && <div className="error-message">Error al iniciar sesión. Por favor, verifica tus credenciales.</div>}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
