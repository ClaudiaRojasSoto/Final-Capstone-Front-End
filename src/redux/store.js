import { configureStore } from '@reduxjs/toolkit';
import carSlice from './carReducer';

const store = configureStore({
  reducer: {
    car: carSlice,
  },
});

export default store;
