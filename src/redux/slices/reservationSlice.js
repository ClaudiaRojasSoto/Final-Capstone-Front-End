import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk para obtener las reservas del usuario
export const fetchUserReservations = createAsyncThunk('reservation/fetchUserReservations', async () => {
  const response = await fetch('http://localhost:3000/api/user_reservations', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }

  const errorData = await response.json();
  throw new Error(errorData.message);
});

// Thunk para eliminar una reserva
export const deleteReservation = createAsyncThunk(
  'reservation/deleteReservation',
  async (reservationId) => {
    const response = await fetch(`http://localhost:3000/api/reservations/${reservationId}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    return reservationId;
  },
);

// Definición del slice de reservas
const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    reservations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserReservations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserReservations.fulfilled, (state, action) => {
        state.loading = false;
        state.reservations = action.payload;
      })
      .addCase(fetchUserReservations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Casos para el thunk de eliminación
      .addCase(deleteReservation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.reservations = state.reservations.filter(
          (reservation) => reservation.reservation.id !== action.payload,
        );
      })
      .addCase(deleteReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectUserReservations = (state) => state.reservation.reservations;
export const selectReservationLoading = (state) => state.reservation.loading;
export const selectReservationError = (state) => state.reservation.error;

export default reservationSlice.reducer;
