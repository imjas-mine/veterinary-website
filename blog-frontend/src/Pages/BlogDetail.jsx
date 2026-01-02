import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";
import { ArrowLeft, Calendar, Share2, Bookmark, User, Clock } from "lucide-react";

const BlogDetail = () => {
  let param = useParams();
  const id = param.id;
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getBlogById() {
      const res = await fetch(`${API_BASE_URL}/api/posts/${id}`);
      const data = await res.json();
      setBlog(data);
      setLoading(false);
    }
    getBlogById();
  }, [id]);

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const blogSection = document.getElementById('blog');
      if (blogSection) blogSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Loading State - Minimal & Clean
  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-pulse space-y-8">
          <div className="h-4 w-24 bg-gray-100 rounded"></div>
          <div className="h-12 w-3/4 bg-gray-100 rounded"></div>
          <div className="flex gap-4">
            <div className="h-10 w-10 bg-gray-100 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-3 w-32 bg-gray-100 rounded"></div>
              <div className="h-3 w-24 bg-gray-100 rounded"></div>
            </div>
          </div>
          <div className="w-full h-[400px] bg-gray-100 rounded-lg"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-4 bg-gray-100 rounded w-full"></div>)}
          </div>
        </div>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <article className="bg-white min-h-screen pt-24 pb-20">

      {/* Top Navigation Bar */}
      <nav className="fixed top-20 left-0 w-full bg-white/80 backdrop-blur-sm z-40 border-b border-gray-100 py-3 transition-all duration-300">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Back to Blogs</span>
          </button>
          <div className="flex gap-4">
            <button className="text-gray-400 hover:text-sky-600 transition-colors"><Share2 size={18} /></button>
            <button className="text-gray-400 hover:text-sky-600 transition-colors"><Bookmark size={18} /></button>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 mt-12">

        {/* Header: Category & Title */}
        <header className="mb-10 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-6 text-sm">
            <span className="px-3 py-1 bg-sky-50 text-sky-700 font-semibold rounded-full tracking-wide uppercase text-xs">
              {blog.category}
            </span>
            <span className="text-gray-400 flex items-center gap-1">
              <Calendar size={14} /> {blog.postedOn}
            </span>
            <span className="text-gray-400 flex items-center gap-1">
              <Clock size={14} /> 5 min read
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-8 font-serif">
            {blog.title}
          </h1>

          {/* Author Block */}
          <div className="flex items-center justify-center sm:justify-start gap-4 border-t border-b border-gray-100 py-6">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-100 to-blue-50 flex items-center justify-center text-sky-700 font-bold text-xl ring-4 ring-white shadow-sm">
                <User size={24} />
              </div>
              {/* Online Indicator */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <p className="text-gray-900 font-bold text-sm">Dr. Simran Kaur</p>
              <p className="text-gray-500 text-xs uppercase tracking-wider font-medium">Veterinary Surgeon • B.V.Sc & A.H</p>
            </div>
          </div>
        </header>

        {/* Featured Image - Wide & Cinematic */}
        {blog.imageUrl && (
          <figure className="mb-12 -mx-6 sm:mx-0">
            <img
              src={`${API_BASE_URL}/api/s3/download/${blog.imageUrl}`}
              alt={blog.title}
              className="w-full h-auto sm:rounded-xl shadow-sm max-h-[500px] object-cover"
            />

          </figure>
        )}

        {/* Main Content - Editorial Style */}
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-sky-600 prose-img:rounded-xl">
          <p className="whitespace-pre-line text-[1.125rem] leading-[2rem]">
            {blog.description}
          </p>
        </div>

      </div>
    </article>
  );
};

export default BlogDetail;
