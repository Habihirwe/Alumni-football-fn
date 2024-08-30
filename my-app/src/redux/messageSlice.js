import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const createMessage= createAsyncThunk("message/createMessage",async(userData,thunkAPI)=>{
    try {
        const response = await fetch('http://localhost:8001/api/createMessage', {
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
})

const messageSlice =createSlice({
    name:"message",
    intitialState:{
        items:null,
        loading:false,
        error:""
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        

    }
}
    
)