
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userData, thunkAPI) => {

    try {
      const response = await fetch('https://alumni-football-bn.onrender.com/api/signup', {
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

export const getUsers = createAsyncThunk("auth/getUsers", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('No token found, please log in first.');
    }

    const response = await fetch("https://alumni-football-bn.onrender.com/api/getAllUsers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json", 
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized: Please check your credentials.');
      }
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();

    console.log(data)
    return data.allusers;

  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const deleteuser = createAsyncThunk("message/deleteMessage", async (userID,thunkAPI) => {
  try {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('No token found, please log in first.');
    }

    const response = await fetch(`https://alumni-football-bn.onrender.com/api/deleteuser/${userID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json", 
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized: Please check your credentials.');
      }
      throw new Error('Failed to delete user');
    }
    return userID;

  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    users:[],
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
      })
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; 
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log('Error fetching users:', action.payload);
      })
      .addCase(deleteuser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteuser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter(user => user._id !== action.payload);
      })
      .addCase(deleteuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log('Error fetching single post:', action.payload);
      });
  },
});

export default authSlice.reducer;
