import React from "react";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  return (
    <Link to={`/article/${data.id}`} className="card-a">
      <div className="card">
        <h1 className="heading-card">{data.title}</h1>
        <div className="image-container">
          <img src={data.image} alt={data.title} width="100%" height="100%" />
        </div>
        <div className="description-card">{data.description}</div>
        <div className="footer-card">{`${data.category} / ${data.Date}`}</div>
      </div>
    </Link>
  );
};

export default Card;
