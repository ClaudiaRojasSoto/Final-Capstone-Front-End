import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../redux/slices/userSlice';

const ReservePageFromSideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  const [cars, setCars] = useState([]);
  const [selectedCarId, setSelectedCarId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    if (!currentUser) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, currentUser]);

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
        setSelectedCarId(carsData[0]?.id);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };
    fetchCars();
  }, []);

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
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="card bg-transparent border-light mt-5">
              <div className="card-body create-form vh-75 mobile-text-reserve">
                <h3 className="text-center text-white ">Reserve a Car</h3>
                <div className="my-1">
                  <p className="my-1 text-bg-light text-center">
                    Current User:
                    {currentUser ? currentUser.name : 'Loading...'}
                  </p>
                  <label htmlFor="car_selection">
                    Select Car:
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
                <form className="needs-validation" noValidate onSubmit={handleReservation}>
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
                  <div className="my-1">
                    <label htmlFor="end_time">
                      Final Time:
                      <input
                        type="datetime-local"
                        id="end_time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        required
                      />
                    </label>
                  </div>
                  <div className="my-1">
                    <label htmlFor="city">
                      Pick a city:
                      <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                    </label>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-success" type="submit">Reserve</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ReservePageFromSideBar;
