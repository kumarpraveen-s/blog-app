import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './app.css';
import NavBar from "./components/navBar";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Tech from "./pages/Tech";
import Tours from "./pages/Tours";
import Fitness from "./pages/Fitness";

const App = () => {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async (url, applyData) => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const blogData = await response.json();
        applyData(blogData);
      } catch (err) {
        console.log(err.message || "Something went wrong!");
      }
    };
    const applyBlog = (blogdata) => {
      const blog=blogdata.data;
      setBlogs(blog);
    };
    fetchData("https://blog-backend-react-app.herokuapp.com/api/v1/blogdata",applyBlog);
  }, []);
  console.log(Blogs);
  return (
    <>
      {Blogs.length===0 && <h1 className="loader">Loading...</h1>}
      { Blogs.length > 0  && (
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home Blogs={Blogs} />} />
            <Route path="/tech" element={<Tech Blogs={Blogs} />} />
            <Route path="/tours" element={<Tours Blogs={Blogs} />} />
            <Route
              path="/fitness"
              element={<Fitness Blogs={Blogs} />}
            />
            <Route path="/article/:id" element={<Article />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
