import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../redux/slices/userSlice';

const ReservePage = () => {
  const { carId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  const [cars, setCars] = useState([]);
  const [selectedCarId, setSelectedCarId] = useState(carId || '');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

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
          throw new Error('Error fetching cars');
        }
        const data = await response.json();
        setCars(data);
        if (!carId) {
          setSelectedCarId(data[0]?.id);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (!carId) {
      fetchCars();
    }
  }, [carId]);

  const handleReservation = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert('Please log in to make a reservation.');
      return;
    }

    if (!carId && !selectedCarId) {
      alert('Please select a car to proceed with the reservation.');
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
    <div>
      <h1>Reserve a Car</h1>
      {!carId && (
        <div>
          <label htmlFor="car_selection">
            Select a Car:
            <select
              id="car_selection"
              value={selectedCarId}
              onChange={(e) => setSelectedCarId(e.target.value)}
              required
            >
              {cars.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}
      <p>
        Username:
        {currentUser ? currentUser.name : 'Loading...'}
      </p>
      <form onSubmit={handleReservation}>
        <div>
          <label htmlFor="start_time">
            Start Time:
            <input
              type="datetime-local"
              id="start_time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="end_time">
            End Time:
            <input
              type="datetime-local"
              id="end_time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="city">
            City:
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default ReservePage;
