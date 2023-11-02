import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cardetails.css';

import PropTypes from 'prop-types';

const CarDetails = ({ car }) => {
  const navigate = useNavigate();
  if (!car) {
    return null;
  }

  return (
    <>
      <div className="align-items-center bg-white d-flex justify-content-center custom-high custom-set mt-2">
        <div className="row" />
        <div className="col-12 col-md-7">
          <img src={car.image_url} alt={car.name} />
        </div>
        <div className="col-12 col-md-5">
          <div className="d-flex flex-column mx-2">
            <h3 className="text-end p-0 m-0">{car.name}</h3>
            <p className="mb-4  text-black-50 text-end">
              £
              {car.finance_fee}
              {' '}
              deposit upon any Car
            </p>
            <h6 className="bg-body-secondary d-flex justify-content-between p-1">
              <p>Finance Fee:</p>
              <p>
                £
                {car.finance_fee}
              </p>
            </h6>
            <h6 className="d-flex justify-content-between p-1">
              <p>Option to Purchase Fee:</p>
              <p>
                £
                {car.option_to_purchase_fee}
              </p>
            </h6>
            <h6 className="bg-body-secondary d-flex justify-content-between p-1">
              <p>Total Amount Payable:</p>
              <p>
                £
                {'  '}
                {car.total_amount_payable}
              </p>
            </h6>
            <h6 className="d-flex justify-content-between p-1">
              <p>
                Duration:
              </p>
              <p>
                {car.duration}
                {'  '}
                Months
              </p>
            </h6>
          </div>
          <p className="text-end">
            {' '}
            5.29 APR
            {' '}
            Representative
            {' '}
          </p>
        </div>
      </div>
      <button
        className="btn btn-success"
        onClick={() => navigate(-2)}
        type="button"
      >
        Back
      </button>

    </>
  );
};

CarDetails.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    finance_fee: PropTypes.number.isRequired,
    option_to_purchase_fee: PropTypes.number.isRequired,
    total_amount_payable: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }),
};

CarDetails.defaultProps = {
  car: {
    id: 0,
    name: '',
    description: '',
    image_url: '',
    finance_fee: 0,
    option_to_purchase_fee: 0,
    total_amount_payable: 0,
    duration: 0,
  },
};

export default CarDetails;
