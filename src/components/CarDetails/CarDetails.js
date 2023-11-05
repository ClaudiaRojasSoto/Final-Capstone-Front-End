import React from 'react';
import './cardetails.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CarDetails = ({ car, onGoBack }) => {
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
        <div className="col-12 col-md-5 este">
          <div className="d-flex flex-column mx-2">
            <h3 className="text-end p-0 m-0">{car.name}</h3>
            <p className="mb-4 mobile-margin text-black-50 text-end">
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
            <h6 className="d-flex justify-content-between px-1">
              <p>
                Duration:
              </p>
              <p>
                {car.duration}
                {'  '}
                Months
              </p>
            </h6>
            <p className="text-end to-left pb-5 padding-mobile">
              {' '}
              5.29 APR
              {' '}
              Representative
              {' '}
            </p>
          </div>

          <div className="text-end">
            <button
              className="btn bullet-back-btn px-5 text-white"
              onClick={() => navigate(`/reserve/${car.id}`)}
              type="button"
            >
              Reserve  ▹
            </button>
          </div>
        </div>
      </div>

      <button
        className="btn btn-toolbar text-btn-white rounded-back-btn fs-5"
        onClick={() => onGoBack()}
        type="button"
      >
        &laquo;
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
  onGoBack: PropTypes.func.isRequired,
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
