import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Blog from "../Components/Blog";
import HeroImage from "../assets/Hero.png";
import { Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config";

const INITIAL_VISIBLE_COUNT = 5;

const Blogs = () => {
  const [Blogs, setBlogs] = useState([]);
  const token = localStorage.getItem("token");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isAuthorized, setisAuthorized] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [loading, setLoading] = useState(true);

  const filteredPosts =
    selectedCategory === "All"
      ? Blogs
      : Blogs.filter((blog) => blog.category === selectedCategory);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const categories = [
    "All",
    "Pet Health",
    "Preventive Care",
    "Emergency Care",
    "Nutrition",
    "Dental Care",
  ];

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [selectedCategory]);

  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/posts`);
        const data = await res.json();
        console.log(data);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    getBlogs();
  }, []);

  useEffect(() => {
    async function validateToken() {
      if (!token) {
        console.log("No token found");
        setisAuthorized(false);
        return;
      }
      try {
        const res = await fetch(`${API_BASE_URL}/api/auth/validate`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 200) {
          console.log("Token is valid");
          setisAuthorized(true);
        } else {
          console.log("Token is invalid");
          setisAuthorized(false);
        }
      } catch (error) {
        console.error("Error validating token:", error);
        setisAuthorized(false);
      }
    }
    validateToken();
  }, [token]);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  return (
    <section id="blog">
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
              Stay informed with expert veterinary advice, pet care tips, and
              the latest insights from Dr. Simran.
            </p>
          </div>

          {isAuthorized && (
            <div className="flex justify-center my-8">
              <Link
                to="AddBlog"
                className="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer hover:bg-blue-700 w-full max-w-xs md:max-w-sm font-semibold transition-colors text-center"
              >
                Add Blogs
              </Link>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border rounded-sm px-3 py-1.5 text-sm border-gray-300 text-gray-700 cursor-pointer"
                  >
                    {categories.map((cat) => (
                      <option key={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <span className="text-sm text-gray-500">
                  Showing {visiblePosts.length} of {filteredPosts.length} articles
                </span>
              </div>
              <div className="space-y-6">
                {loading ? (
                  // Skeleton Loaders
                  Array(3).fill(0).map((_, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse border border-gray-100 flex flex-col md:flex-row h-full md:h-52">
                      <div className="w-full md:w-1/3 bg-gray-200 h-48 md:h-full"></div>
                      <div className="p-6 flex-1 space-y-3">
                        <div className="flex gap-2">
                          <div className="h-4 w-20 bg-gray-200 rounded"></div>
                          <div className="h-4 w-24 bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                        <div className="h-4 w-full bg-gray-200 rounded"></div>
                        <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  ))
                ) : (
                  visiblePosts.map((post) => (
                    <Blog
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      description={post.description}
                      category={post.category}
                      date={post.postedOn}
                      imageUrl={post.imageUrl}
                      isAuthorized={isAuthorized}
                      onDelete={(id) =>
                        setBlogs((prev) => prev.filter((b) => b.id !== id))
                      }
                    />
                  ))
                )}
              </div>

              {/* View More / Show Less Buttons */}
              <div className="flex justify-center gap-4 mt-8">
                {hasMore && !loading && (
                  <button
                    onClick={handleViewMore}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium transition-colors cursor-pointer"
                  >
                    View More
                  </button>
                )}
                {visibleCount > INITIAL_VISIBLE_COUNT && !loading && (
                  <button
                    onClick={handleShowLess}
                    className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 font-medium transition-colors cursor-pointer"
                  >
                    Show Less
                  </button>
                )}
              </div>
            </div>

            <div className="hidden lg:block">
              <h4 className="text-gray-700 font-semibold mb-4">Categories</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm ${selectedCategory === cat
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
