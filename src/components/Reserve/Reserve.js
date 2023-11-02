import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './reserve.css';

function Reserve() {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [carId, setCarId] = useState(null);
  const [time, setTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!date) {
      alert('Please select a date.');
      return;
    }

    if (!time) {
      alert('Please select a time.');
      return;
    }

    const reservationData = {
      reservation: {
        start_time: `${date}T${time}`,
        end_time: `${endDate}T${endTime}`,
        city,
        car_id: carId,
      },
    };

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      navigate('/confirmationPage');
    } catch (error) {
      console.error('Error submitting reservation:', error);
      alert('Failed to submit reservation.');
    }
  };

  return (
    <div className="reserve-container">
      <h2 className="reserve-title">BOOK A VESPA TEST-RIDE</h2>
      <p className="reserve-info">
        There are 34 different versions of the Vespa. Today five series are in production:
        the classic manual transmission PX and the modern CVT transmission S, LX, GT, and GTS.
        We have showrooms all over the globe which some include test-riding facilities.
        If you wish to find out if a test-ride is available for you, please use the selector below.
      </p>
      <form className="reserve-form" onSubmit={handleSubmit}>
        <label className="reserve-label" htmlFor="reserve-date">
          Date:
          <input
            id="reserve-date"
            type="date"
            className="reserve-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>

        <label className="reserve-label" htmlFor="reserve-time">
          Time:
          <input
            id="reserve-time"
            type="time"
            className="reserve-input"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>

        <label className="reserve-label" htmlFor="end-date">
          End Date:
          <input
            id="end-date"
            type="date"
            className="reserve-input"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>

        <label className="reserve-label" htmlFor="end-time">
          End Time:
          <input
            id="end-time"
            type="time"
            className="reserve-input"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </label>

        <label className="reserve-label" htmlFor="reserve-city">
          City:
          <select
            id="reserve-city"
            className="reserve-select"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          >
            <option value="">Select a city</option>
            <option value="London">London</option>
            <option value="New York">New York</option>
          </select>

          <select
            value={carId}
            onChange={(e) => setCarId(e.target.value)}
          >
            <option value="1">Car Model 1</option>
            <option value="2">Car Model 2</option>
            ...
          </select>

        </label>

        <button className="reserve-btn" type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default Reserve;
