import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const registerAsync = createAsyncThunk('register/registerAsync', async ({ name, email, password }) => {
  const response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        name,
        email,
        password,
      },
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  const errorData = await response.json();
  throw new Error(errorData.message);
});

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectRegisterData = (state) => state.register.data;
export const selectRegisterLoading = (state) => state.register.loading;
export const selectRegisterError = (state) => state.register.error;

export default registerSlice.reducer;
