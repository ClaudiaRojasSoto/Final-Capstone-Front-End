import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
  loading: false,
  error: null,
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    fetchCarStart: (state) => ({ ...state, loading: true }),
    fetchCarSuccess: (state, action) => ({ ...state, cars: action.payload, loading: false }),
    fetchCarFailure: (state, action) => ({ ...state, error: action.payload, loading: false }),
  },
});

export const { fetchCarStart, fetchCarSuccess, fetchCarFailure } = carSlice.actions;
export default carSlice.reducer;
