import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../redux/signupSlice';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { showErrorMessage, showSuccessMessage } from '../utilis/toast';

const Signup = () => {
  const form = useForm();
  const { register, handleSubmit,formState } = form;
 const {errors}=formState

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);

  
  const onSubmit = (data) => {
    const { firstname, lastname, email, password, repeatPassword } = data;

    if (password !== repeatPassword) {
      alert('Passwords do not match!');
      return;
    }

    dispatch(signupUser({ firstname, lastname, email, password, repeatPassword }))
      .then((action) => {
        if (signupUser.fulfilled.match(action)) {
          showSuccessMessage('Signed up successfully');
          navigate('/login');
        } else {
          showErrorMessage('Incorrect credentials!');
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              placeholder="Enter your first name"
              type="text"
              id="firstname"
              {...register("firstname", {required:"First name is required"})}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <p className="text-red-600 mt-2">{errors.firstname?.message}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              placeholder="Enter your last name"
              type="text"
              id="lastname"
              {...register("lastname",  {required:"Last name is required"})}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <p className="text-red-600 mt-2">{errors.lastname?.message}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              placeholder="Enter your email"
              type="email"
              id="email"
              {...register("email",  {pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:"Invalid Email"
              }})}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <p className="text-red-600 mt-2">{errors.email?.message}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              placeholder="Enter your password"
              type="password"
              id="password"
              {...register("password",{pattern:{
                value:/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                message:"Password must have capital letter and special character "
              }} )}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <p className="text-red-600 mt-2">{errors.password?.message}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="repeatPassword" className="block text-sm font-medium text-gray-700">Repeat Password</label>
            <input
              placeholder="Repeat your password"
              type="password"
              id="repeatPassword"
              {...register("repeatPassword", {pattern:{
                value:/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                message:"must be the same as password "
              }})}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <p className="text-red-600 mt-2">{errors.repeatPassword?.message}</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
          <p className="pt-2">Already have an account? <a className="text-blue-500" href="/login">Login</a></p>
        </form>

        {error && <p className="mt-4 text-red-500">{error}</p>}
        {user && <p className="mt-4 text-green-500">Welcome, {user.email}!</p>}
      </div>
    </div>
  );
};

export default Signup;
