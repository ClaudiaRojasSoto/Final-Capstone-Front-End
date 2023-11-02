// src/redux/slices/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/api/users/current', {
        method: 'GET',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to fetch current user.');
      }
      const currentUserData = await response.json();
      return currentUserData;
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    status: 'idle',
    error: null,
  },
  reducers: {

  },
  extraReducers: {
    [getCurrentUser.pending]: (state) => {
      state.status = 'loading';
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.currentUser = action.payload;
    },
    [getCurrentUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
