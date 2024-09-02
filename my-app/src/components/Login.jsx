import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/loginSlice';
import { useNavigate } from 'react-router-dom';
import { showSuccessMessage,showErrorMessage } from '../utilis/toast';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, user } = useSelector((state) => state.Auth);

  const hundleSubmit=(e)=>{
    e.preventDefault();
    const {  email, password} = formData;
    dispatch(loginUser({email,password})).then((action) => {
        if (loginUser.fulfilled.match(action)) {
          showSuccessMessage('logged in succesfull');
          navigate('/blog'); 
        }else{
          showErrorMessage('incorrect credentials');
        }
        
      });

  }

  const [formData, setFormData] = useState({
    email: '',
    password: ''
    
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };




  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form onSubmit={hundleSubmit}  >
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
            placeholder='enter your Email'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
            placeholder='enter your password'
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
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
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {user && <p className="mt-4 text-green-500">Welcome, {user.email}!</p>}
      </div>
    </div>
  );
};

export default Login;
