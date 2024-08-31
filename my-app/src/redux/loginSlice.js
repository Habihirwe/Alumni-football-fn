import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "Auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await fetch("https://alumni-football-bn.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/form-data",
        },
        body: JSON.stringify(userData),
      });
      if(!response.ok){
        throw new error("failed to Login")
      }
      const data = await response.json()
      localStorage.setItem('authToken', data.token);
      return data
    
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);


    }
  }
);

const loginSlice = createSlice({
  name: "Auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending,(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase(loginUser.fulfilled,(state,action)=>{
        state.loading= false,
        state.user=action.payload
    })
    .addCase(loginUser.rejected,(state,action)=>{
        state.loading=false,
        state.error= action.payload
    })
  },
});

export default loginSlice.reducer