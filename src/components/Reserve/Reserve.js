import React, { useState } from 'react';

function Reserve() {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const username = "JohnDoe";
  const selectedItem = "Vespa XYZ";
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      username: username,
      selectedItem: selectedItem,
      date: date,
      city: city
    });
  };

  return (
    <div>
      <h2>Reserve an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} readOnly />
        </label>
        <br />
        <label>
          Selected Item:
          <input type="text" value={selectedItem} readOnly />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
        </label>
        <br />
        <label>
          City:
          <input type="text" value={city} onChange={e => setCity(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}

export default Reserve;
