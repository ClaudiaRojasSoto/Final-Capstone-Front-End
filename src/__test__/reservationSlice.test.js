import reservationReducer, {
    fetchUserReservations,
    deleteReservation,
    selectUserReservations,
    selectReservationLoading,
    selectReservationError,
  } from '../redux/slices/reservationSlice';

  const initialState = {
    reservations: [],
    loading: false,
    error: null,
  };
  
  describe('reservationSlice', () => {
    it('should handle initial state', () => {
      expect(reservationReducer(undefined, {})).toEqual(initialState);
    });
  
    it('should handle fetchUserReservations.pending', () => {
      expect(reservationReducer(initialState, { type: fetchUserReservations.pending.type })).toEqual({
        ...initialState,
        loading: true,
      });
    });
  
    it('should handle fetchUserReservations.fulfilled', () => {
      const mockReservations = [{ id: 1, reservation: { id: 1, car_id: 1, start_time: '2023-01-01', end_time: '2023-01-02' }}];
      expect(reservationReducer(initialState, { type: fetchUserReservations.fulfilled.type, payload: mockReservations })).toEqual({
        ...initialState,
        reservations: mockReservations,
        loading: false,
      });
    });
  
    it('should handle fetchUserReservations.rejected', () => {
      const error = 'Error fetching reservations';
      expect(reservationReducer(initialState, { type: fetchUserReservations.rejected.type, error: { message: error } })).toEqual({
        ...initialState,
        error: error,
        loading: false,
      });
    });
  
    it('should handle deleteReservation.pending', () => {
      expect(reservationReducer(initialState, { type: deleteReservation.pending.type })).toEqual({
        ...initialState,
        loading: true,
      });
    });
  
    it('should handle deleteReservation.fulfilled', () => {
      const startingState = {
        ...initialState,
        reservations: [{ id: 1, reservation: { id: 1 } }],
      };
      expect(reservationReducer(startingState, { type: deleteReservation.fulfilled.type, payload: 1 })).toEqual({
        ...initialState,
        reservations: [],
        loading: false,
      });
    });

    it('should handle deleteReservation.rejected', () => {
      const error = 'Error deleting reservation';
      expect(reservationReducer(initialState, { type: deleteReservation.rejected.type, error: { message: error } })).toEqual({
        ...initialState,
        error: error,
        loading: false,
      });
    });
  });

  describe('reservationSlice selectors', () => {
    const state = {
      reservation: initialState,
    };
  
    it('selectUserReservations', () => {
      expect(selectUserReservations(state)).toBe(state.reservation.reservations);
    });
  
    it('selectReservationLoading', () => {
      expect(selectReservationLoading(state)).toBe(state.reservation.loading);
    });
  
    it('selectReservationError', () => {
      expect(selectReservationError(state)).toBe(state.reservation.error);
    });
  });
