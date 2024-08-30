import React from 'react';
import { deleteuser, getUsers } from '../redux/signupSlice';
import { useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
const UserTable = () => {


    const {users,error,loading}=useSelector((state)=>state.auth)
    const dispatch= useDispatch()

    useEffect(() => {
        dispatch(getUsers());
      }, [dispatch]);
    
      const handleDelete = (userID) => {
        dispatch(deleteuser(userID));
      };

  return (
    <div id='usertable' className="overflow-x-auto rounded-lg p-8">
      <table className="min-w-full bg-white text-black rounded-lg">
        <thead>
          <tr className="w-full bg-yellow-50 text-left text-black">
            <th className="px-3 py-2">USERNAME</th>
            <th className="px-3 py-2">EMAIL</th>
            {/* <th className="px-3 py-2">ADMIN</th> */}
            <th className="px-3 py-2">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-none">
              <td className="px-3 py-2">{user.firstname + "  "+ user.lastname}  </td>
              <td className="px-3 py-2">{user.email}</td>
              {/* <td className="px-3 py-2">
                {user.isAdmin ? (
                  <span className="text-green-500">✔️</span>
                ) : (
                  <span className="text-red-500">❌</span>
                )}
              </td> */}
              <td className="px-4 py-2">
                <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
