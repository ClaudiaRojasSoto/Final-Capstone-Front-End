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
    fetchCarSuccess: (state, action) => ({
      ...state,
      cars: action.payload,
      loading: false,
    }),
    fetchCarFailure: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    createCarStart: (state) => ({ ...state, loading: true }),
    createCarSuccess: (state, action) => ({
      ...state,
      cars: [...state.cars, action.payload],
      success: true,
      loading: false,
    }),
    createCarFailure: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
  },
});

export const {
  fetchCarStart,
  fetchCarSuccess,
  fetchCarFailure,
  createCarStart,
  createCarSuccess,
  createCarFailure,
} = carSlice.actions;

export default carSlice.reducer;

export const createCar = (carData) => async (dispatch) => {
  dispatch(createCarStart());
  try {
    const formData = new FormData();
    formData.append('car[name]', carData.name);
    formData.append('car[description]', carData.description);
    formData.append('car[deposit]', carData.deposit);
    formData.append('car[finance_fee]', carData.finance_fee);
    formData.append('car[option_to_purchase_fee]', carData.option_to_purchase_fee);
    formData.append('car[total_amount_payable]', carData.total_amount_payable);
    formData.append('car[duration]', carData.duration);
    formData.append('car[removed]', carData.removed);
    formData.append('car[image]', carData.image);

    const response = await fetch('http://localhost:3000/api/cars', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    dispatch(createCarSuccess(data));
  } catch (error) {
    dispatch(createCarFailure(error.message));
  }
};
