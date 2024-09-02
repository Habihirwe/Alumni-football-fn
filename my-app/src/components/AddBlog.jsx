import { useState } from "react";
import { creatPost } from "../redux/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showErrorMessage, showSuccessMessage } from "../utilis/toast";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.blogs);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setFormData({
      ...formData,
      image: file,
    });
    console.log("Selected file:", file);
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, content, image } = formData;
    dispatch(creatPost({ title, content, image })).then((action) => {
      if (creatPost.fulfilled.match(action)) {
        showSuccessMessage("blog added successfully")
        navigate("/blog");
      }
      showErrorMessage("missing fieald, please fill all fields!")
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8 mb-8">
      <h2 className="text-2xl font-bold mb-4">Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            onChange={handleChange}
            rows="6"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            accept="image/*"
          />
        </div>

        <div>
          <button
            disabled={loading}
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Blog Post
          </button>
        </div>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default AddBlog;
