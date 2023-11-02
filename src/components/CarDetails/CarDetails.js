import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './cardetails.css';

const CarDetails = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/cars/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Error fetching car details');
        }

        const data = await response.json();
        setCarDetails(data);
      } catch (error) {
        throw new Error('Error fetching car details');
      }
    };

    fetchData();
  }, [id]);

  if (!carDetails) {
    return <div>Loading...</div>;
  }

  return (

    <div className="align-items-center bg-white d-flex justify-content-center vh-100">
      <div className="row" />
      <div className="col-5">
        <img src={carDetails.image_url} alt={carDetails.name} />
      </div>
      <div className="col-3 custom-size">
        <div className="d-flex flex-column mx-2">
          <h3 className="text-end p-0 m-0">{carDetails.car.name}</h3>
          <p className="mb-4 text-black-50 text-end">
            £
            {carDetails.car.finance_fee}
            {' '}
            deposit upon any Car
          </p>
          <h6 className="bg-body-secondary d-flex justify-content-between p-1">
            <p>Finance Fee:</p>
            <p>
              £
              {carDetails.car.finance_fee}
            </p>
          </h6>
          <h6 className="d-flex justify-content-between p-1">
            <p>Option to Purchase Fee:</p>
            <p>
              £
              {carDetails.car.option_to_purchase_fee}
            </p>
          </h6>
          <h6 className="bg-body-secondary d-flex justify-content-between p-1">
            <p>Total Amount Payable:</p>
            <p>
              £
              {'  '}
              {carDetails.car.total_amount_payable}
            </p>
          </h6>
          <h6 className="d-flex justify-content-between p-1">
            <p>
              Duration:
            </p>
            <p>
              {carDetails.car.duration}
              {'  '}
              Months
            </p>
          </h6>
        </div>
      </div>
    </div>

  );
};

export default CarDetails;
