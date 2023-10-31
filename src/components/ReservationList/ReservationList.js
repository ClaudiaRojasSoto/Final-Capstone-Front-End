import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  fetchUserReservations,
  selectUserReservations,
  selectReservationLoading,
  selectReservationError,
} from '../../redux/slices/reservationSlice';
import '../session/session.css';
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
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-8">
            <div className="login-form">
              <h3 className="mb-4">Your Reservations</h3>
              {loading && <div>Loading...</div>}
              {error && (
                <div>
                  Error:
                  {error}
                </div>
              )}
              <ul>
                {reservations.map((reservationData) => (
                  <li key={reservationData.reservation.id} className="reservation-item">
                    <div>
                      Car Name:
                      {reservationData.car.name}
                    </div>
                    <div>
                      Start Time:
                      {new Date(reservationData.reservation.start_time).toLocaleString()}
                    </div>
                    <div>
                      End Time:
                      {new Date(reservationData.reservation.end_time).toLocaleString()}
                    </div>
                    <div>
                      City:
                      {reservationData.reservation.city}
                    </div>
                    <div>
                      Deposit:
                      {reservationData.car.deposit}
                    </div>
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
