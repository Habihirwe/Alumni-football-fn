import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/blogSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faComment,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

function Blog() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <div className=" bg-white  px-4 py-10 z-40 ">
      <h1 className="font-bold text-black text-center text-3xl pb-4">Blogs</h1>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <div className="grid md:grid-cols-3 grid-cols-1 items-center">
          {Array.isArray(items) && items.length > 0 ? (
            items.map((post) => (
              <div
                key={post._id}
                className="max-w-sm  h-[450px] overflow-hidden shadow-2xl bg-[#34495E]  ml-6 mr-6 px-4 py-10 z-40  mb-6 rounded-lg  "
              >
                <Link to={`/blog/${post._id}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full rounded-lg h-48 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000"
                  />

                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">
                      {post.title}
                    </div>
                    <p className="text-white text-base line-clamp-3">
                      <a className="hover:underline">{post.content}</a>
                    </p>
                  </div>
                  <hr />
                  <div className=" flex flex-row space-x-2 px-6 mt-4">
                    <div className="flex flex-row space-x-2">
                      <span className="text-white">
                        <FontAwesomeIcon icon={faComment} />
                      </span>
                      <p className="text-white">{post.comments.length}</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <span className="text-white">
                        <FontAwesomeIcon icon={faHeart} />
                      </span>
                      <p className="text-white">{post.likes.length}</p>
                    </div>
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
