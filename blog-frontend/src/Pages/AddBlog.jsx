import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import BlogForm from '../Components/BlogForm';

const AddBlog = () => {
 
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const API_BASE_URL = "http://localhost:8080";

  const handleSubmit = async ({ title, description, category, file }) => {
    setError("");
    setSuccess("");
    setIsLoading(true);

    const token = localStorage.getItem("token");

    if (!token) {
      setError("You must be logged in to create a blog");
      setIsLoading(false);
      return;
    }

    try {
      //Upload image to S3
      const imageKey = `${Date.now()}-${file.name}`;
      const formData = new FormData();
      formData.append("key", imageKey);
      formData.append("file", file);

      const uploadResponse = await fetch(`${API_BASE_URL}/api/s3/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!uploadResponse.ok) {
        const errorText = await uploadResponse.text();
        throw new Error(errorText || "Failed to upload image");
      }

      console.log("Image uploaded successfully");

      //Create blog post (only if image upload succeeded)
      const postResponse = await fetch(`${API_BASE_URL}/api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description, category, imageUrl: imageKey }),
      });

      if (!postResponse.ok) {
        const errorText = await postResponse.text();
        throw new Error(errorText || "Failed to create blog post");
      }

      console.log("Blog created successfully");
      setSuccess("Blog created successfully!");
      navigate("/");

    } catch (err) {
      console.error("Error:", err.message);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-indigo-100 h-screen w-full justify-center items-center flex">
      <Navbar />
      <div className="px-4 py-8 md:px-28 md:py-10 my-20 w-full">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 ">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-900 font-serif text-center">Add a New Blog</h1>
            <BlogForm 
            initialValues={{ }}
            onSubmit={handleSubmit}
            submitText={isLoading ? "Creating..." : "Add Blog"}
            isLoading={isLoading}
            ></BlogForm>
            {error && <div className="text-red-600 text-center">{error}</div>}
            {success && <div className="text-green-600 text-center">{success}</div>}
        </div>
      </div>
    </div>
  )
}

export default AddBlog
