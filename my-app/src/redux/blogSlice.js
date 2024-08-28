import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("blog/getPost", async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('No token found, please log in first.');
      }
  
      const response = await fetch("http://localhost:8001/api/getblogs", {
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
        throw new Error('Failed to fetch posts');
      }
  
      const data = await response.json();
      return data.blog;
  
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });



  export const getsinglePost = createAsyncThunk("blog/getsinglePost", async (postId,thunkAPI) => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('No token found, please log in first.');
      }
  
      const response = await fetch(`http://localhost:8001/api/blog/${postId}`, {
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
        throw new Error('Failed to fetch posts');
      }
  
      const data = await response.json();

      console.log(data);
      return data.blog;
  
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
  
  
const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
      items: [], 
      loading: false,
      singleItem: null, 
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getPost.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getPost.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload; 
        })
        .addCase(getPost.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          console.log('Error fetching posts:', action.payload);
        })
        .addCase(getsinglePost.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getsinglePost.fulfilled, (state, action) => {
            state.loading = false;
            state.singleItem = action.payload;
          })
          .addCase(getsinglePost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            console.log('Error fetching single post:', action.payload);
          });
    },
  });
  
  export default blogSlice.reducer;
  