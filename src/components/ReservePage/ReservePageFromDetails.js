import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentUser } from '../../redux/slices/userSlice';

const ReservePageFromDetails = () => {
  const { carId } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const [carDetails, setCarDetails] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/cars/${carId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch car details.');
        }
        const data = await response.json();
        setCarDetails(data.car);
      } catch (error) {
        console.error('Error fetching car details:', error);
      }
    };

    if (carId) {
      fetchCarDetails();
    }
  }, [carId]);

  useEffect(() => {
    if (!currentUser) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, currentUser]);

  const handleReservation = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert('Please log in to make a reservation.');
      return;
    }

    if (!carDetails) {
      alert('Please wait for the car information to load.');
      return;
    }

    const reservationData = {
      reservation: {
        start_time: startTime,
        end_time: endTime,
        city,
      },
    };

    try {
      const response = await fetch(`http://localhost:3000/api/cars/${carId}/reservations`, {
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
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Reserve a Car</h1>
      {carDetails ? (
        <div>
          <p>
            Car Model:
            {carDetails.name}
          </p>
        </div>
      ) : (
        <p>Loading car details...</p>
      )}
      {currentUser ? (
        <p>
          Username:
          {currentUser.name}
        </p>
      ) : (
        <p>Loading user information...</p>
      )}
      <form onSubmit={handleReservation}>
        <div>
          <label htmlFor="start_time">
            Start Time:
            <input
              type="datetime-local"
              id="start_time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
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
            />
          </label>
        </div>
        <button type="submit">
          Reserve
        </button>
      </form>
    </div>
  );
};

export default ReservePageFromDetails;
