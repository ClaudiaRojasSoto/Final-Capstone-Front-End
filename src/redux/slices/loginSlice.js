import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = loginSlice.actions;

export const loginAsync = (email, password) => async (dispatch) => {
  dispatch(fetchDataStart());
  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } else {
      dispatch(fetchDataFailure('Error al iniciar sesión'));
    }
  } catch (error) {
    dispatch(fetchDataFailure('Error al realizar la solicitud'));
  }
};

export const selectData = (state) => state.login.data;
export const selectLoading = (state) => state.login.loading;
export const selectError = (state) => state.login.error;

export default loginSlice.reducer;
