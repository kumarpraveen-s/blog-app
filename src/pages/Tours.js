import React from "react";
import "../styling/page.css";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
const Tours = ({ Blogs }) => {
  const tours = Blogs.filter((item) => item.category === "Tourism");
  return (
    <div className="page-container">
      <div className="page-first-container">
        <h1>Tourism</h1>
        <Card4 data={tours[0]} />
        <Card4 data={tours[1]} />
        <Card4 data={tours[2]} />
        <Card4 data={tours[3]} />
        <Card4 data={tours[4]} />
        <Card4 data={tours[1]} />
        <Card4 data={tours[0]} />
        <Card4 data={tours[2]} />
      </div>
      <div className="page-second-container">
        <h1>Top posts</h1>
        <Card5 data={tours[0]} />
        <Card6 data={tours[1]} />
        <Card6 data={tours[2]} />
        <Card6 data={tours[3]} />
        <Card6 data={tours[4]} />
      </div>
    </div>
  );
};

export default Tours;
