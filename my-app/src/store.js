import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./redux/signupSlice"
import AuthReducer from "./redux/loginSlice"
const store = configureStore({
    reducer:{
       auth: authReducer,
       Auth:AuthReducer



    }
})

export default store 