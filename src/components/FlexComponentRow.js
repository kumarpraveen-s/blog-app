import React from "react";
import Card from "./Card";

const FlexComponentRow = (props) => {
  console.log(props.data);

  return (
    <div className="third">
      <Card data={props.data[0]} />
      <Card data={props.data[1]} />
      <Card data={props.data[2]} />
    </div>
  );
};

export default FlexComponentRow;
