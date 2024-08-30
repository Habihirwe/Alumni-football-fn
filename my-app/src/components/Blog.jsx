import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/blogSlice";
import { Link } from "react-router-dom";


function Blog() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  
  return (
    <div className=" bg-white ml-6 mr-6 px-4 py-10 z-40 ">
      <h1 className="font-bold text-black text-center text-3xl pb-4">Blogs</h1>
      <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
        <div className="columns-3">
          {Array.isArray(items) && items.length > 0 ? (
            items.map((post) => (
              <div
              key={post._id}
                 className="max-w-sm  h-[500px] overflow-hidden shadow-2xl bg-[#34495E] ml-6 mr-6 px-4 py-10 z-40  mb-6 rounded-lg  "
              >
                <Link to={`/blog/${post._id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000"
                />
               
               
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-white">
                    {post.title}
                  </div>
                  <p className="text-white text-base overflow-hidden">
                    <a className="hover:underline">
                      {post.content}
                    </a>
                  </p>
                </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default Blog;
