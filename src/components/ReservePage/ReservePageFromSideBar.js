import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../redux/slices/userSlice';

const ReservePageFromSideBar = () => {
  const { carId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  const [cars, setCars] = useState([]);
  const [selectedCarId, setSelectedCarId] = useState('');
  const [carDetails, setCarDetails] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [city, setCity] = useState('');

  // Obtener el usuario actual si no está cargado
  useEffect(() => {
    if (!currentUser) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, currentUser]);

  // Obtener la información de todos los coches para el menú desplegable si no se proporciona carId
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/cars', {
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch cars');
        }
        const carsData = await response.json();
        setCars(carsData);
        if (!carId && carsData.length > 0) {
          setSelectedCarId(carsData[0].id); // Preseleccionar el primer coche por defecto
        }
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    if (!carId) {
      fetchCars();
    }
  }, [carId]);

  // Obtener detalles del coche seleccionado cuando hay un carId
  useEffect(() => {
    if (carId) {
      const fetchCarDetails = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/cars/${carId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch car details');
          }
          const data = await response.json();
          setCarDetails(data);
          setSelectedCarId(carId);
        } catch (error) {
          console.error('Error fetching car details:', error);
        }
      };

      fetchCarDetails();
    }
  }, [carId]);

  const handleReservation = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert('Please log in to make a reservation.');
      return;
    }

    const reservationData = {
      start_time: startTime,
      end_time: endTime,
      city,
      car_id: selectedCarId,
    };

    try {
      const response = await fetch(`http://localhost:3000/api/cars/${selectedCarId}/reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(reservationData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to make reservation.');
      }

      await response.json();
      alert('Reservation made successfully!');
      navigate('/user_reservations');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <button className="border-1 btn m-2 rounded-circle" onClick={() => navigate('/home')} type="button">
        Back
      </button>
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-10">
            <form onSubmit={handleReservation} className="create-form p-2 text-white">
              <h3 className="text-center">Reserve a Car</h3>
              {carDetails && (
              <div className="mb-1 px-3">
                <p>
                  Car Model:
                  {' '}
                  {carDetails.name}
                </p>
              </div>
              )}
              {!carId && (
              <div className="mb-1 px-3">
                <label htmlFor="car_selection" className="form-label">
                  Select a Car:
                  <select
                    className="form-select"
                    id="car_selection"
                    value={selectedCarId}
                    onChange={(e) => setSelectedCarId(e.target.value)}
                    required
                  >
                    <option value="">Select a car...</option>
                    {cars.map((car) => (
                      <option key={car.id} value={car.id}>
                        {car.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              )}
              <div className="mb-1 px-3">
                <label htmlFor="start_time" className="form-label">
                  Start Time:
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="start_time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="mb-1 px-3">
                <label htmlFor="end_time" className="form-label">
                  End Time:
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="end_time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="mb-1 px-3">
                <label htmlFor="city" className="form-label">
                  City:
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success">Reserve</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservePageFromSideBar;
