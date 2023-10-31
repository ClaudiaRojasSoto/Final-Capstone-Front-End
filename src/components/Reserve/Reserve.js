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
}


