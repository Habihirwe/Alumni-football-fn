import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const createMessage= createAsyncThunk("message/createMessage",
    async(userData,thunkAPI)=>{
    try {
        const response = await fetch('https://alumni-football-bn.onrender.com/api/createMessage', {
          method: 'POST',
          headers: {
            'Content-Type': "application/form-data",
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to send message due to missing fields');
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
})

export const getMessage= createAsyncThunk("message/getMessage",
    async(_,thunkAPI)=>{
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
              throw new Error('No token found, please log in first.');
            }
        
            const response = await fetch(`https://alumni-football-bn.onrender.com/api/getmessage`, {
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
              throw new Error('Failed to fetch messages');
            }
        
            const data = await response.json();
      
            console.log(data);
            return data.Message;
        
          } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
})

export const deleteMessage = createAsyncThunk("message/deleteMessage", async (messageID,thunkAPI) => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('No token found, please log in first.');
      }
  
      const response = await fetch(`https://alumni-football-bn.onrender.com/api/deletemessage/${messageID}`, {
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
      return messageID;
  
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
  

const messageSlice =createSlice({
    name:"message",
    initialState:{
        messages:[],
        loading:false,
        error:""
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(createMessage.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(createMessage.fulfilled, (state, action) => {
            state.loading = false;
            state.messages = action.payload;
          })
          .addCase(createMessage.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(getMessage.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getMessage.fulfilled, (state, action) => {
            state.loading = false;
            state.messages = action.payload;
          })
          .addCase(getMessage.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(deleteMessage.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(deleteMessage.fulfilled, (state, action) => {
            state.loading = false;
            state.messages = state.messages.filter(message => message._id !== action.payload);
          })
          .addCase(deleteMessage.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            console.log('Error fetching single post:', action.payload);
          });;

    }
}
    
)

export default messageSlice.reducer;