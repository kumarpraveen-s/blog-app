import React from "react";
import { Link } from "react-router-dom";

const CardC1 = (props) => {
  const data = props.data;
  return (
    <Link to={`/article/${data.id}`} className="card-a">
      <div className="cardc1-cotainer">
        <img src={data.image} alt={data.title} className="cardc1-img" />
        <div className="cardc1-heading">
          <h1>{data.title}</h1>
        </div>
        <p className="cardc1-des">{data.Description}</p>
        <h6 className="cardc1-category">{`${data.category} / ${data.Date}`}</h6>
      </div>
    </Link>
  );
};

export default CardC1;
