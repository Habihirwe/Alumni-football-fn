import React from 'react';

const users = [
  {
    id: 1,
    username: 'adminuser',
    email: 'adminuser@gmail.com',
    isAdmin: true,
  },
  {
    id: 2,
    username: 'codewithsahand',
    email: 'codewithsahand@gmail.com',
    isAdmin: true,
  },
  {
    id: 3,
    username: 'sahandghavidel1582',
    email: 'sahand.gha@gmail.com',
    isAdmin: false,
  },
  {
    id: 4,
    username: 'user5',
    email: 'user5@gmail.com',
    isAdmin: false,
  },
  {
    id: 5,
    username: 'usser1ssssdddd',
    email: 'user2@gmail.com',
    isAdmin: false,
  },
  {
    id: 6,
    username: 'user1',
    email: 'user1@gmail.com',
    isAdmin: false,
  },
];

const UserTable = () => {
  return (
    <div id='usertable' className="overflow-x-auto rounded-lg">
      <table className="min-w-full bg-white text-black rounded-lg">
        <thead>
          <tr className="w-full bg-yellow-50 text-left text-black">
            <th className="px-3 py-2">USERNAME</th>
            <th className="px-3 py-2">EMAIL</th>
            <th className="px-3 py-2">ADMIN</th>
            <th className="px-3 py-2">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-none">
              <td className="px-3 py-2">{user.username}</td>
              <td className="px-3 py-2">{user.email}</td>
              <td className="px-3 py-2">
                {user.isAdmin ? (
                  <span className="text-green-500">✔️</span>
                ) : (
                  <span className="text-red-500">❌</span>
                )}
              </td>
              <td className="px-4 py-2">
                <button className="text-red-500 hover:text-red-700">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
