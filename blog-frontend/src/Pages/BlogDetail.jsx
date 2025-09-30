import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import HeroImage from "../assets/Hero.png";

const BlogDetail = () => {
  let param = useParams();
  const id = param.id;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(id);
  useEffect(() => {
    async function getBlogById() {
      const res = await fetch(`http://localhost:8080/api/posts/${id}`);
      const data = await res.json();
      setBlog(data);
      setLoading(false);
    }
    getBlogById();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-indigo-100 min-h-screen w-full flex items-center justify-center">
        <span className="text-indigo-700 text-xl font-semibold">
          Loading...
        </span>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="bg-indigo-100 min-h-screen w-full flex items-center justify-center">
        <span className="text-red-600 text-xl font-semibold">
          Blog not found.
        </span>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className=" px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto ">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            Expert Insights
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-4">
            Latest from Our Blog
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-3 text-xl">
            Stay informed with expert veterinary advice, pet care tips, and the
            latest insights from Dr. Simran.
          </p>
        </div>
        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-500 text-sm">{blog.postedOn}</span>
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
            <span className="text-indigo-600 text-sm font-medium">
              {blog.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-800">
            {blog.title}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed font-sans">
            {blog.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
