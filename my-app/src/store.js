import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./redux/signupSlice"
import AuthReducer from "./redux/loginSlice"
import blogReducer from "./redux/blogSlice"
import messageReducer from "./redux/messageSlice"
const store = configureStore({
    reducer:{
       auth: authReducer,
       Auth:AuthReducer,
       blogs:blogReducer,
       message:messageReducer
       



    }
})

export default store 