import React from "react";
import { Link } from "react-router-dom";

const Card4 = (props) => {
  const data = props.data;
  return (
    <Link to={`/article/${data.id}`} className="card-link">
      <div className="card4-container">
        <div className="box1">
          <img src={data.image} alt={data.title} />
        </div>
        <div className="box2">
          <h1>{data.title}</h1>
        </div>
        <div className="box3">{data.description}</div>
        <div className="box4">{`${data.category} / ${data.Date}`}</div>
      </div>
    </Link>
  );
};

export default Card4;
