import React from "react";
import CardC1 from "./cardC1";

const FlexComponentColumn = (props) => {
  return (
    <div className="column-container">
      <CardC1 data={props.data[0]} />
      <CardC1 data={props.data[1]} />
      <CardC1 data={props.data[2]} />
      <CardC1 data={props.data[3]} />
      <CardC1 data={props.data[4]} />
      <CardC1 data={props.data[1]} />
    </div>
  );
};

export default FlexComponentColumn;
