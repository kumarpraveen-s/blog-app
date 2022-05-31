import React from "react";
import { Link } from "react-router-dom";

const CardC2 = (props) => {
  const data = props.data;
  return (
    <Link to={`/article/${data.id}`} className="card-a">
      <div className="cardc2-container">
        <img src={data.image} alt={data.title} className="cardc2-img" />
        <div className="cardc2-heading">
          <h1>{data.title}</h1>
        </div>
        <p className="cardc2-des">{data.description}</p>
        <h6 className="cardc2-category">{`${data.category} / ${data.Date}`}</h6>
      </div>
    </Link>
  );
};

export default CardC2;
