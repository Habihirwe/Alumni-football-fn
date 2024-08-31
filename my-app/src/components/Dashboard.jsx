import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import UserTable from './UserTable';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Outlet/>

      </div>
    </div>
  );
};

export default Dashboard;
