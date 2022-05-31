import React from "react";
import "../styling/page.css";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
const Tech = ({ Blogs }) => {
  const tech = Blogs.filter((item) => item.category === "Technology");
  console.log(tech);
  return (
    <div className="page-container">
      <div className="page-first-container">
        <h1>Tech</h1>
        <Card4 data={tech[0]} />
        <Card4 data={tech[1]} />
        <Card4 data={tech[2]} />
        <Card4 data={tech[3]} />
        <Card4 data={tech[4]} />
        <Card4 data={tech[2]} />
        <Card4 data={tech[0]} />
        <Card4 data={tech[1]} />
      </div>
      <div className="page-second-container">
        <h1>Top posts</h1>
        <Card5 data={tech[0]} />
        <Card6 data={tech[1]} />
        <Card6 data={tech[2]} />
        <Card6 data={tech[3]} />
        <Card6 data={tech[4]} />
      </div>
    </div>
  );
};

export default Tech;
