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
      <div className="row">
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
          <h2>SignUp</h2>
          {loading && <div className="loading-message">Registrando usuario...</div>}
          {error && <div className="error-message">{error}</div>}
          {' '}
          {/* Mostrar el mensaje de error */}
          <div className="custom-blur p-5 w-75">
            <form onSubmit={handleSignUp}>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
