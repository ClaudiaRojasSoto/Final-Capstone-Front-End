import { configureStore } from '@reduxjs/toolkit';
import carSlice from './slices/carSlice';
import loginReducer from './slices/loginSlice';
import registerReducer from './slices/registerSlice';
import reservationReducer from './slices/reservationSlice';

const store = configureStore({
  reducer: {
    car: carSlice,
    login: loginReducer,
    register: registerReducer,
    reservation: reservationReducer,
  },
});

export default store;
