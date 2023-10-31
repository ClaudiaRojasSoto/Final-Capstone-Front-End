import React, { useState } from 'react';
import './reserve.css';

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
        <div className="reserve-container">
            <h2 className="reserve-title">BOOK A VESPA TEST-RIDE</h2>
            <p className="reserve-info">
                There are 34 different versions of the Vespa. Today five series are in production: the classic manual transmission PX and the modern CVT transmission S, LX, GT, and GTS. We have showrooms all over the globe which some include test-riding facilities.
                If you wish to find out if a test-ride is available in your area, please use the selector below.
            </p>
            <form className="reserve-form" onSubmit={handleSubmit}>
                <label className="reserve-label">
                    City:
                    <select className="reserve-select" value={city} onChange={e => setCity(e.target.value)} required>
                        {/* You can add more cities here */}
                        <option value="London">London</option>
                        <option value="New York">New York</option>
                    </select>
                </label>
                <button className="reserve-btn" type="submit">Book Now</button>
            </form>
        </div>
    );
}

export default Reserve;
