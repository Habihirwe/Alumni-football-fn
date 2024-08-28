
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userData, thunkAPI) => {

    try {
      const response = await fetch('http://localhost:8001/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': "application/form-data",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
