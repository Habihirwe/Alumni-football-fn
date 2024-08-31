import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("blog/getPost", async (_, thunkAPI) => {
    try {
      // const token = localStorage.getItem('authToken');
      // if (!token) {
      //   throw new Error('No token found, please log in first.');
      // }
  
      const response = await fetch("https://alumni-football-bn.onrender.com/api/getblogs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json", 
          // 'Authorization': `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Unauthorized: Please check your credentials.');
        }
        throw new Error('Failed to fetch posts');
      }
  
      const data = await response.json();
      console.log(data)
      return data.blog;
  
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });



  export const getsinglePost = createAsyncThunk("blog/getsinglePost", async (postId,thunkAPI) => {
    try {
      // const token = localStorage.getItem('authToken');
      // if (!token) {
      //   throw new Error('No token found, please log in first.');
      // }
  
      const response = await fetch(`https://alumni-football-bn.onrender.com/api/blog/${postId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json", 
          // 'Authorization': `Bearer ${token}`,
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
  


export const creatPost = createAsyncThunk(
  "blogs/creatPost",
  async (userData, thunkAPI) => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("No token found, please log in first!");
      }
      const formData = new FormData();
      formData.append('title', userData.title);
      formData.append('content', userData.content);
      formData.append('image', userData.image);

      const response = await fetch("https://alumni-football-bn.onrender.com/api/createBlog", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`, 
        },
        body: formData, 
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Unauthorized: Please check your credentials.');
        }
        throw new Error('Failed to create post');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);     
  
export const deletePost = createAsyncThunk("blog/deletePost", async (postId,thunkAPI) => {
  try {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('No token found, please log in first.');
    }

    const response = await fetch(`https://alumni-football-bn.onrender.com/api/deleteblog/${postId}`, {
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
      throw new Error('Failed to delete posts');
    }
    console.log(postId)
    return postId;

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
          })
          .addCase(creatPost.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(creatPost.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
          })
          .addCase(creatPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(deletePost.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(deletePost.fulfilled, (state, action) => {
            state.loading = false;
            state.items = state.items.filter(post => post._id !== action.payload);
          })
          .addCase(deletePost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            console.log('Error fetching single post:', action.payload);
          });
    },
  });
  
  export default blogSlice.reducer;
  