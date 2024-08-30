import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../redux/signupSlice';
import { useNavigate} from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repeatPassword:'',
  });

  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password, repeatPassword } = formData;
    
    if (password !== repeatPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    dispatch(signupUser({ firstname, lastname, email, password,repeatPassword}))
    .then((action) => {
      if (signupUser.fulfilled.match(action)) {
        navigate('/Login'); 
      };
    });
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">firstName</label>
            <input
            placeholder='enter your first name'
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">lastName</label>
            <input
            placeholder='enter your last name'
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

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

          <div className="mb-4">
            <label htmlFor="repeatPassword" className="block text-sm font-medium text-gray-700">repeatPassword</label>
            <input
            placeholder='repeat yor password'
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              value={formData.repeatPassword}
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
            Sign Up
          </button>
          <p className='pt-2'>Already have an Account,<a className='text-blue-500' href="/login"> login</a></p>
        </form>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {user && <p className="mt-4 text-green-500">Welcome, {user.email}!</p>}
      </div>
    </div>
  );
};

export default Signup;
