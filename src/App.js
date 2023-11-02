import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main/Main';
import Session from './components/session/Session';
import Login from './components/session/Login';
import Signup from './components/session/SignUp';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarForm from './components/CarForm/CarForm';
import ReservationList from './components/ReservationList/ReservationList';
import CarDetails from './components/CarDetails/CarDetails';
import ReservePage from './components/ReservePage/ReservePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Session />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Main />} />
          <Route path="/addcar" element={<CarForm />} />
          <Route path="/user_reservations" element={<ReservationList />} />
          <Route path="/car-details/:id" element={<CarDetails />} />
          <Route path="/reserve/:carId" element={<ReservePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
