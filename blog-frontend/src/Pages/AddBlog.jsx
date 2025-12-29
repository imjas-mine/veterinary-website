import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import BlogForm from '../Components/BlogForm';

const AddBlog = () => {
 
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async ({title,description,category}) => {
    setError("");
    setSuccess("");

    const token=localStorage.getItem("token");
    console.log("the auth token is:"+token);
    try{
        const res=await fetch ("http://localhost:8080/api/posts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                'Authorization': `Bearer ${token}`,
            },
            body:JSON.stringify({title,description,category})
        });
        if(res.ok){

          console.log("successfully posted the blog");
          navigate("/");
        }
        else{
          const errMsg=await res.text();
          console.error(errMsg);
          setError(errMsg);
        }
    }
    catch(err){
        console.log("error posting the blog");
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
            submitText="Add Blog"
            ></BlogForm>
            {error && <div className="text-red-600 text-center">{error}</div>}
            {success && <div className="text-green-600 text-center">{success}</div>}
        </div>
      </div>
    </div>
  )
}

export default AddBlog
