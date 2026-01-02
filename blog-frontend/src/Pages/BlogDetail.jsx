import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import HeroImage from "../assets/Hero.png";
import { API_BASE_URL } from "../config";
import { ArrowLeft } from "lucide-react";


const BlogDetail = () => {
  let param = useParams();
  const id = param.id;
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(id);
  useEffect(() => {
    async function getBlogById() {
      const res = await fetch(`${API_BASE_URL}/api/posts/${id}`);
      const data = await res.json();
      setBlog(data);
      setLoading(false);
    }
    getBlogById();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen pt-24">
        <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          {/* Header skeleton */}
          <div className="text-center max-w-2xl mx-auto mb-10 animate-pulse">
            <div className="h-6 w-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="h-4 w-96 bg-gray-200 rounded mx-auto"></div>
          </div>

          {/* Image skeleton */}
          <div className="mb-8 animate-pulse">
            <div className="w-full h-64 md:h-96 bg-gray-200 rounded-xl"></div>
          </div>

          {/* Content skeleton */}
          <div className="bg-white rounded-xl shadow-md p-8 animate-pulse">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </div>
            <div className="h-10 w-3/4 bg-gray-200 rounded mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
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
    <div className="bg-gray-50 py-12 pt-24">
      <div className=" px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto ">
        {/* Back Button */}
        <button
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              const blogSection = document.getElementById('blog');
              if (blogSection) blogSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft size={20} />
          <span>Back to All Blogs</span>
        </button>

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

        {/* Hero Image */}
        {blog.imageUrl && (
          <div className="mb-8">
            <img
              src={`${API_BASE_URL}/api/s3/download/${blog.imageUrl}`}
              alt={blog.title}
              className="w-full max-h-[500px] object-cover rounded-xl shadow-lg"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="bg-white rounded-xl shadow-md p-8">
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
          <p className="text-gray-700 text-lg leading-relaxed font-sans whitespace-pre-line">
            {blog.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
