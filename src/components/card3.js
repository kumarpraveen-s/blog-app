import React from "react";
import { Link } from "react-router-dom";

const CardC3 = (props) => {
  const data = props.data;
  return (
    <Link to={`/article/${data.id}`} className="card-a">
      <div className="cardc3-cotainer">
        <img src={data.image} alt={data.title} className="cardc1-img" />
        <div className="cardc3-heading">
          <h1>{data.title}</h1>
        </div>
        <h6 className="cardc3-category">{`${data.category} / ${data.Date}`}</h6>
      </div>
    </Link>
  );
};

export default CardC3;
