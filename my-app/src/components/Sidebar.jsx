import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      </div>
      <nav className="mt-10">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700">

          <NavLink to="/" className={({ isActive }) => isActive ? 'bg-gray-700' : ''}>Overview</NavLink>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
          <NavLink to="/usertable" className={({ isActive }) => isActive ? 'bg-gray-700' : ''}>Users</NavLink>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="/blogtable" className={({ isActive }) => isActive ? 'bg-gray-700' : ''}>Blogs</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="/messagetable" className={({ isActive }) => isActive ? 'bg-gray-700' : ''}>Messages</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="#" className={({ isActive }) => isActive ? 'bg-gray-700' : ''}>Comments</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="#" className={({ isActive }) => isActive ? 'bg-gray-700' : ''}>Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
