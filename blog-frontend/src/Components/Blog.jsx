import React, { use } from "react";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Blog = ({
  id,
  title,
  description,
  category,
  date,
  imageUrl,
  isAuthorized,
  onDelete,
}) => {

  const navigate = useNavigate();

  function handleClick(id) {
    console.log("navigating to blog detail page with id:", id);
  }
  function handleUpdate(id) {
    console.log("navigating to update blog page with id:", id);
    navigate(`/UpdateBlog/${id}`, {
      state: { id, title, description, category }
    })

  }
  async function handleDelete(id) {
    console.log("trying to delete blog with id:", id);

    try {
      const res = await fetch(`http://localhost:8080/api/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.ok) {
        console.log("successfully deleted the blog");
        onDelete(id);
      } else {
        const errMsg = await res.text();
        console.error(errMsg);
      }
    } catch (err) {
      console.log("error deleting the blog");
    }
  }
  const formattedDate = new Date(date + "T00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-200">
      {imageUrl && (
        <img
          src={`http://localhost:8080/api/s3/download/${imageUrl}`}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      )}
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 flex-wrap">
        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </span>
        <div className="flex gap-0.5 items-center">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      <p className="text-gray-600 mt-2">{description}</p>

      <div className="mt-3 flex items-center justify-between">
        <a onClick={() => {
          navigate(`/blog/${id}`)
        }} className="text-blue-600 font-medium text-sm inline-block cursor-pointer hover:text-blue-400">
          Read Full Article →
        </a>
        <div className="flex gap-4">
          {isAuthorized && (
            <button
              onClick={() => {
                handleUpdate(id);
              }}
              className="text-blue-600 font-medium text-sm inline-block cursor-pointer hover:text-blue-400"
            >
              Update
            </button>
          )}
          {isAuthorized && (
            <button
              onClick={() => {
                handleDelete(id);
              }}
              className="text-red-600 font-medium text-sm inline-block cursor-pointer hover:text-red-400"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
