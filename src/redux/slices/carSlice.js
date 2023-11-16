import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
  loading: false,
  error: null,
  deleteMode: false,
};

// Añadido
export const deleteCar = createAsyncThunk(
  'car/deleteCar',
  async (carId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3000/api/cars/${carId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Server error on delete');
      }
      return carId; // Añadido
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    fetchCarStart: (state) => {
      state.loading = true;
    },
    fetchCarSuccess: (state, action) => {
      state.loading = false;
      state.cars = action.payload;
    },
    fetchCarFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createCarStart: (state) => {
      state.loading = true;
    },
    createCarSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.cars.push(action.payload);
    },
    createCarFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    toggleDeleteMode: (state) => {
      state.deleteMode = !state.deleteMode;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.cars = state.cars.filter((car) => car.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteCar.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  fetchCarStart,
  fetchCarSuccess,
  fetchCarFailure,
  createCarStart,
  createCarSuccess,
  createCarFailure,
  toggleDeleteMode,
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
