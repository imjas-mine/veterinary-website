import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Services from "./Pages/Services";
import BlogDetail from "./Pages/BlogDetail";
import Login from "./Pages/Login";
import AddBlog from "./Pages/AddBlog";
import UpdateBlog from "./Pages/UpdateBlog";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Pricing from "./Pages/Pricing";
import FAQPage from "./Pages/FAQPage";
import Appointment from "./Pages/Appointment";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Pricing />
              <FAQPage />
              <Blogs />
              <Appointment></Appointment>
            </>
          }
        />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/AddBlog" element={<AddBlog />} />
        <Route path="/UpdateBlog/:id" element={<UpdateBlog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
