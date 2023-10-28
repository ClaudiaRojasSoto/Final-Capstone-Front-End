import { configureStore } from '@reduxjs/toolkit';
import carSlice from './slices/carSlice';
import loginReducer from './slices/loginSlice';

const store = configureStore({
  reducer: {
    car: carSlice,
    login: loginReducer,
  },
});

export default store;
