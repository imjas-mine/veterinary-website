import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import BlogForm from '../Components/BlogForm';
import { API_BASE_URL } from '../config';

const UpdateBlog = () => {
  const { state } = useLocation();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = async ({ title, description, category, file }) => {
    setError("");
    setSuccess("");
    setIsLoading(true);

    const token = localStorage.getItem("token");

    if (!token) {
      setError("You must be logged in to update a blog");
      setIsLoading(false);
      return;
    }

    try {
      let finalImageUrl = state.imageUrl; // Keep existing image by default

      // Only upload if a new file is selected
      if (file) {
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

        console.log("New image uploaded successfully");
        finalImageUrl = imageKey; // Use new image key
      }

      // Update blog post
      const postResponse = await fetch(`${API_BASE_URL}/api/posts/${state.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description, category, imageUrl: finalImageUrl }),
      });

      if (!postResponse.ok) {
        const errorText = await postResponse.text();
        throw new Error(errorText || "Failed to update blog post");
      }

      console.log("Blog updated successfully");
      setSuccess("Blog updated successfully!");
      navigate("/");

    } catch (err) {
      console.error("Error:", err.message);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-indigo-100 min-h-screen w-full">
      <Navbar />
      <div className="px-4 py-8 md:px-28 md:py-10 mx-10">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-900 font-serif text-center">Update the Blog</h1>
          <BlogForm
            initialValues={{ title: state.title, description: state.description, category: state.category }}
            onSubmit={handleSubmit}
            submitText={isLoading ? "Updating..." : "Update Blog"}
            isLoading={isLoading}
            currentImageUrl={state.imageUrl}
          ></BlogForm>
          {error && <div className="text-red-600 text-center mt-4">{error}</div>}
          {success && <div className="text-green-600 text-center mt-4">{success}</div>}
        </div>
      </div>
    </div>
  )
}

export default UpdateBlog

