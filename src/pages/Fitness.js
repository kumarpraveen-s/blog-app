import React from "react";
import "../styling/page.css";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
const Fitness = ({ Blogs }) => {
  const fitnessData = Blogs.filter((item) => item.category === "Fitness");
  return (
    <div className="page-container">
      <div className="page-first-container">
        <h1>Fitness</h1>
        <Card4 data={fitnessData[0]} />
        <Card4 data={fitnessData[1]} />
        <Card4 data={fitnessData[2]} />
        <Card4 data={fitnessData[3]} />
        <Card4 data={fitnessData[1]} />
        <Card4 data={fitnessData[2]} />
        <Card4 data={fitnessData[0]} />
        <Card4 data={fitnessData[1]} />
      </div>
      <div className="page-second-container">
        <h1>Top posts</h1>
        <Card5 data={fitnessData[0]} />
        <Card6 data={fitnessData[1]} />
        <Card6 data={fitnessData[2]} />
        <Card6 data={fitnessData[3]} />
        <Card6 data={fitnessData[0]} />
      </div>
    </div>
  );
};

export default Fitness;
