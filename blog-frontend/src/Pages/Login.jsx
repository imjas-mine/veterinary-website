import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        console.log("Login successful");
        const token = await res.text();
        console.log(token);
        localStorage.setItem("token", token);
        navigate("/");
      } else {
        const errorMsg = await res.text();
        setError(errorMsg);
        console.log(errorMsg);
      }
    } catch (error) {
      console.log("Login failed");
      setError("Invalid email or password");
    }
  }

  return (
    <div className="bg-indigo-100 min-h-screen w-full">
      <Navbar />
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-900 font-serif text-center">
            Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              Login
            </button>
            {error && <div className="text-red-600 text-center">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
