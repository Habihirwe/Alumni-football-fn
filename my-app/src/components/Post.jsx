import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getsinglePost } from "../redux/blogSlice";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Post() {

  const navigate=useNavigate()
  const handleButtonClick = () => {
    navigate("/contact");
  };

  const { postId } = useParams();
  const dispatch = useDispatch();
  const { singleItem, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    console.log("Post ID:", postId);
    if (postId) {
      dispatch(getsinglePost(postId));
    }
  }, [dispatch, postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!singleItem) {
    return <div>No post found.</div>;
  }

  return (
    <div className="mx-auto ml-6 mr-6 py-10 px-4 z-40 bg-white">
      <h1 className="font-bold text-black text-center text-3xl pb-6">
        {singleItem.title}
      </h1>
      <div className="rounded overflow-hidden shadow-lg items-center py-6">
        <img
          className="w-full h-[500px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000 rounded-lg"
          src={singleItem?.image}
          alt={singleItem?.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{singleItem?.title}</div>
          <p className="text-gray-400 text-base">{singleItem?.content}</p>
        </div>
        <div onClick={handleButtonClick} className="flex justify-center px-6 pt-4 pb-2 items-center">
          <Button>READ MORE</Button>
        </div>
      </div>
    </div>
  );
}

export default Post;
