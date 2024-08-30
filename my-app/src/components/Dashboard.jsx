import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import UserTable from './UserTable';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <MainContent />
      

      </div>
    </div>
  );
};

export default Dashboard;
