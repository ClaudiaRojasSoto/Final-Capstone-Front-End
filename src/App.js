import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main/Main';
import Session from './components/session/Session';
import Login from './components/session/Login';
import Signup from './components/session/SignUp';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarForm from './components/CarForm/CarForm';
import Reserve from './components/Reserve/reserve';

function App() {
  return (
    <div className="App bg-light">
      <Router>
        <Routes>
          <Route path="/" element={<Session />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Main />} />
          <Route path="/addcar" element={<CarForm />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
