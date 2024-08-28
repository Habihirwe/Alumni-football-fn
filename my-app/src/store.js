import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./redux/signupSlice"
import AuthReducer from "./redux/loginSlice"
import blogReducer from "./redux/blogSlice"
const store = configureStore({
    reducer:{
       auth: authReducer,
       Auth:AuthReducer,
       blogs:blogReducer
       



    }
})

export default store 