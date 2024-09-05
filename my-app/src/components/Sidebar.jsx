import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../redux/loginSlice';
import { showSuccessMessage } from '../utilis/toast';

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.Auth);

  const handleLogout = () => {
    dispatch(logoutUser()).then((action) => {
      if (logoutUser.fulfilled.match(action)) {
        showSuccessMessage('logged out succesfull');
        navigate('/'); 
      }
      
    });
  };

  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      </div>
      <nav className="mt-10">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700">

          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'bg-gray-700' : ''}>Overview</NavLink>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
          <NavLink to="/dashboard/usertable" className={({ isActive }) => isActive ? 'bg-gray-700' : ''}>Users</NavLink>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="/dashboard/blogtable" className={({ isActive }) => isActive ? 'bg-gray-700' : ''}>Blogs</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="/dashboard/messagetable" className={({ isActive }) => isActive ? 'bg-gray-700' : ''}>Messages</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="#" className={({ isActive }) => isActive ? 'bg-gray-700' : ''}>Comments</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="#" className={({ isActive }) => isActive ? 'bg-gray-700' : ''} onClick={handleLogout}>Log out</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
