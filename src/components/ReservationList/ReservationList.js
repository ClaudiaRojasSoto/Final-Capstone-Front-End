import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  fetchUserReservations,
  deleteReservation,
  selectUserReservations,
  selectReservationLoading,
  selectReservationError,
} from '../../redux/slices/reservationSlice';
import './reservationList.css';

const ReservationList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const reservations = useSelector(selectUserReservations);
  const loading = useSelector(selectReservationLoading);
  const error = useSelector(selectReservationError);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserReservations(id));
  }, [dispatch, id]);

  const handleDelete = (reservationId) => {
    dispatch(deleteReservation(reservationId));
  };

  return (
    <>
      <button
        className="border-1 btn m-2 rounded-circle"
        onClick={() => navigate('/home')}
        type="button"
      >
        Back
      </button>

      <div className="container">
        <div className="align-items-center justify-content-center row text-center">
          <div className="col-12">
            <div className="reserve-form">
              <h3 className="text-white">Your Reservations</h3>
              {reservations.length === 0 && <div className="text-white">You dont have reservations yet</div>}
              {loading && <div>Loading...</div>}
              {error && (
                <div>
                  Error:
                </div>
              )}
              <ul>
                {reservations.map((reservationData) => (
                  <li key={reservationData.reservation.id} className="border-dark reservation-item text-white">
                    <div>
                      <span className="text-warning">Car Name:</span>
                      {' '}
                      {reservationData.car.name}
                    </div>
                    <div>
                      <span className="text-warning">Start Time:</span>
                      {' '}
                      {new Date(reservationData.reservation.start_time).toLocaleString()}
                    </div>
                    <div>
                      <span className="text-warning">End Time:</span>
                      {' '}
                      {new Date(reservationData.reservation.end_time).toLocaleString()}
                    </div>
                    <div>
                      <span className="text-warning">City:</span>
                      {' '}
                      {reservationData.reservation.city}
                    </div>
                    <div>
                      <span className="text-warning">Deposit:</span>
                      {' '}
                      {reservationData.car.deposit}
                    </div>
                    <button
                      type="button"
                      className="btn btn-danger btn-text mt-2"
                      onClick={() => {
                        if (typeof window !== 'undefined' && window.confirm('Are you sure you want to delete the reservation?')) {
                          handleDelete(reservationData.reservation.id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationList;
