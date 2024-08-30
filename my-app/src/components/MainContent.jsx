import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/blogSlice";
import { getMessage } from '../redux/messageSlice';
import { getUsers } from '../redux/signupSlice';

const MainContent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.blogs);
  
    useEffect(() => {
      dispatch(getPost());
    }, [dispatch]);

    const {users}=useSelector((state)=>state.auth)
    

    useEffect(() => {
        dispatch(getUsers());
      }, [dispatch]);

    const {messages}=useSelector((state)=>state.message)


    useEffect(() => {
        dispatch(getMessage());
      }, [dispatch]);
    
  return (
    <div className="flex-1 p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Blogs</h3>
          <p className="text-2xl font-bold">{items.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Messages</h3>
          <p className="text-2xl font-bold">{messages.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Users</h3>
          <p className="text-2xl font-bold">{users.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Orders</h3>
          <p className="text-2xl font-bold">456</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
