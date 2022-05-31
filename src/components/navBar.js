import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/navBar.css";

const NavBar = () => {
  const [view, changeView] = useState(false);
  const handleClick = () => {
    changeView(view ? false : true);
  };
  return (
    <>
      <div className="navbar">
        <h1 className="heading">Blog</h1>
        <ul className="container">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/tech">
            <li>Technology</li>
          </Link>
          <Link to="/tours">
            <li>Tourism</li>
          </Link>
          <Link to="/fitness">
            <li>Fitness</li>
          </Link>
        </ul>
        <div className="mobile">
          <button onClick={handleClick}>
            <i className="icon fa fa-bars"></i>
          </button>
        </div>
      </div>
      {view && (
        <ul className="mobile-ul">
          <Link to="/">
            <li className="mobile-li" onClick={handleClick}>
              Home
            </li>
          </Link>
          <Link to="/tech">
            <li className="mobile-li" onClick={handleClick}>
              Technology
            </li>
          </Link>
          <Link to="/tours">
            <li className="mobile-li" onClick={handleClick}>
              Tourism
            </li>
          </Link>
          <Link to="/fitness">
            <li className="mobile-li" onClick={handleClick}>
              Fitness
            </li>
          </Link>
        </ul>
      )}
    </>
  );
};

export default NavBar;
