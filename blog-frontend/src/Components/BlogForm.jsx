import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../config";

const BlogForm = ({ initialValues = {}, onSubmit, submitText, isLoading = false, currentImageUrl = null }) => {
  const [title, setTitle] = useState(initialValues.title || "");
  const [description, setDescription] = useState(initialValues.description || "");
  const [category, setCategory] = useState(initialValues.category || "");
  const [error, setError] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  console.log("current image url", currentImageUrl)
  useEffect(() => {
    setTitle(initialValues.title || "");
    setDescription(initialValues.description || "");
    setCategory(initialValues.category || "");
  }, [initialValues]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) {
        setSelectedFile(file);
        setError("");
      } else {
        setSelectedFile(null);
        setError("Please select an image file");
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith("image/")) {
        setSelectedFile(file);
        setError("");
      } else {
        setSelectedFile(null);
        setError("Please select an image file");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!title || !description || !category) {
      setError("All fields are required");
      return;
    }

    // Only require image if there's no existing image AND no new file selected
    if (!currentImageUrl && !selectedFile) {
      setError("Please select an image");
      return;
    }

    onSubmit({ title, description, category, file: selectedFile });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter blog title"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter blog description"
          rows={5}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        >
          <option value="" disabled>Select category</option>
          <option value="Pet Health">Pet Health</option>
          <option value="Nutrition">Nutrition</option>
          <option value="Preventative Care">Preventative Care</option>
          <option value="Emergency Care">Emergency Care</option>
          <option value="Dental Care">Dental Care</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Cover Image</label>
        <div
          className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${dragActive ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-400"
            }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => document.getElementById("fileInput").click()}
        >
          <input
            id="fileInput"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleChange}
          />
          {selectedFile ? (
            <div className="text-gray-700">
              <span className="font-medium text-indigo-600">New image selected:</span> {selectedFile.name}
            </div>
          ) : currentImageUrl ? (
            <div className="flex flex-col items-center gap-2">
              <img
                src={`${API_BASE_URL}/api/s3/download/${currentImageUrl}`}
                alt="Current"
                className="w-32 h-24 object-cover rounded"
              />
              <p className="text-sm text-gray-500">Current image (click to change)</p>
            </div>
          ) : (
            <>
              <p className="text-gray-500 font-medium">Drag & Drop your image here</p>
              <p className="text-sm text-gray-400 mt-1">or click to browse from device</p>
            </>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-2 rounded-lg transition-colors font-semibold ${isLoading
          ? "bg-indigo-400 text-white cursor-not-allowed"
          : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
      >
        {submitText}
      </button>

      {error && <div className="text-red-600 text-center">{error}</div>}
    </form>
  );
};

export default BlogForm;