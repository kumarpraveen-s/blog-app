import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styling/article.css";

const Article = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
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
      const blog = blogdata.data;
      setArticle(blog);
    };
    fetchData(
      `https://blog-backend-react-app.herokuapp.com/api/v1/article/${id}`,
      applyBlog
    );
    setIsLoading(false);
  }, [id]);
  console.log(article);

  const handlePage = () => {
    navigate(-1);
  };

  return (
    <>
      <br />
      {article.length === 0 && <h1 className="loader">Loading...</h1>}
      {!isLoading && article.length > 0 && (
        <>
          <div className="article-page-container">
            <div className="article-container">
              <p onClick={handlePage} className="icon">
                <i className="fa fa-arrow-left" aria-hidden="true">
                  Go Back
                </i>
              </p>
              <h1 className="article-heading">{article[0].title}</h1>
              <img
                src={article[0].image}
                alt={article[0].title}
                className="article-img"
              />
              <p className="article-para">{article[0].description}</p>
              <p className="article-para">
                diam volutpat commodo sed egestas egestas fringilla phasellus
                faucibus scelerisque eleifend donec pretium vulputate sapien nec
                sagittis aliquam malesuada bibendum arcu vitae elementum
                curabitur vitae nunc sed velit dignissim sodales ut eu sem
                integer vitae justo eget magna fermentum iaculis eu non diam
                phasellus vestibulum lorem sed risus ultricies tristique
              </p>
              <p className="article-para">
                diam volutpat commodo sed egestas egestas fringilla phasellus
                faucibus scelerisque eleifend donec pretium vulputate sapien nec
                sagittis aliquam malesuada bibendum arcu vitae elementum
                curabitur vitae nunc sed velit dignissim sodales ut eu sem
                integer vitae justo eget magna fermentum iaculis eu non diam
                phasellus vestibulum lorem sed risus ultricies tristique
              </p>
              <p className="article-para">
                diam volutpat commodo sed egestas egestas fringilla phasellus
                faucibus scelerisque eleifend donec pretium vulputate sapien nec
                sagittis aliquam malesuada bibendum arcu vitae elementum
                curabitur vitae nunc sed velit dignissim sodales ut eu sem
                integer vitae justo eget magna fermentum iaculis eu non diam
                phasellus vestibulum lorem sed risus ultricies tristique
              </p>
              <p className="article-para">
                diam volutpat commodo sed egestas egestas fringilla phasellus
                faucibus scelerisque eleifend donec pretium vulputate sapien nec
                sagittis aliquam malesuada bibendum arcu vitae elementum
                curabitur vitae nunc sed velit dignissim sodales ut eu sem
                integer vitae justo eget magna fermentum iaculis eu non diam
                phasellus vestibulum lorem sed risus ultricies tristique
              </p>
              <p className="article-para">
                diam volutpat commodo sed egestas egestas fringilla phasellus
                faucibus scelerisque eleifend donec pretium vulputate sapien nec
                sagittis aliquam malesuada bibendum arcu vitae elementum
                curabitur vitae nunc sed velit dignissim sodales ut eu sem
                integer vitae justo eget magna fermentum iaculis eu non diam
                phasellus vestibulum lorem sed risus ultricies tristique
              </p>
              <p>{`${article[0].category} / ${article[0].Date}`}</p>
              <p onClick={handlePage} className="icon">
                <i className="fa fa-arrow-left" aria-hidden="true">
                  Go Back
                </i>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Article;
