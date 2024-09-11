import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/loginSlice';
import { useNavigate } from 'react-router-dom';
import {useForm} from "react-hook-form"
import { showSuccessMessage,showErrorMessage } from '../utilis/toast';

const Login = () => {
  const form = useForm()
  const { register, handleSubmit,formState } = form;
  const {errors}=formState 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, user } = useSelector((state) => state.Auth);

    

  const onSubmit=(data)=>{
    const {  email, password} = data;
    dispatch(loginUser({email,password})).then((action) => {
        if (loginUser.fulfilled.match(action)) {
          showSuccessMessage('logged in succesfull');
          navigate('/blog'); 
        }else{
          showErrorMessage('incorrect credentials');
        }
        
      });

  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate >
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
            placeholder='enter your Email'
              type="email"
              id="email"
              name="email"
            {...register("email", {pattern:{
              value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message:"Invalid Email"
            }})}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            <p className="text-red-600 mt-2">{errors.email?.message}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
            placeholder='enter your password'
              type="password"
              id="password"
              name="password"
              {...register("password",{pattern:{
                value:/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                message:"Password must have capital letter and special character "
              }})}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            <p className="text-red-600 mt-2">{errors.password?.message}</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log In
          </button>
          <p className='pt-2'>Don't have an Account,<a className='text-blue-500' href="/signup"> Sign up</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
