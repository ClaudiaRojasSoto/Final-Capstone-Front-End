import { configureStore } from '@reduxjs/toolkit';
import carSlice from './slices/carSlice';
import loginReducer from './slices/loginSlice';
import registerReducer from './slices/registerSlice';

const store = configureStore({
  reducer: {
    car: carSlice,
    login: loginReducer,
    register: registerReducer,
  },
});

export default store;
