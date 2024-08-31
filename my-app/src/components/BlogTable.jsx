import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/blogSlice";
import { deletePost } from "../redux/blogSlice";

const BlogTable = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const handleButtonClick = () => {
    navigate("/addblog");
  };


  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <div>
      <div className="p-6 rounded-lg flex justify-center mr-8">
        <button
          onClick={handleButtonClick}
          className="p-8 text-lg font-bold bg-green-500 h-[100px] w-[150px] items-center rounded-lg"
        >
          Add Blog
        </button>
      </div>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
      <div id="usertable" className="overflow-x-auto rounded-lg p-4">
        <table className="min-w-full bg-white text-black rounded-lg">
          <thead>
            <tr className="w-full bg-yellow-50 text-left text-black">
              <th className="px-3 py-2"> BLOG TITLE</th>
              <th className="px-3 py-2">IMAGE POSTED</th>
              <th className="px-3 py-2">COMMENTS</th>
              <th className="px-3 py-2">DELETE</th>
              <th className="px-3 py-2">EDIT</th>
            </tr>
          </thead>
          <tbody>
            {items.map((post) => (
              <tr key={post._id} className="border-none">
                <td className="px-3 py-2">{post.title}</td>
                <td className="px-3 py-2">
                  <img
                    src={post.image}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-3 py-2">{post.comments.length}</td>
                <td className="px-4 py-2">
                  <button onClick={() => handleDelete(post._id)} className="text-red-500 hover:text-red-700">
                    Delete
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button className="text-green-500 hover:text-green-700">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogTable;
