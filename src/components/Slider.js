import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Slider.css";
import BtnSlider from "./BtnSlider";

const Slider = ({data}) => {
  const [Index, setIndex] = useState(1);
  const [I, setI] = useState(1);
  const DataSlider=data;
  const nextSlide = () => {
    if (Index !== DataSlider.length) {
      setIndex(Index + 1);
      setI(I + 1);
    } else if (Index === DataSlider.length) {
      setIndex(1);
      setI(1);
    }
  };

  const prevSlide = () => {
    if (Index !== 1) {
      setIndex(Index - 1);
      setI(I - 1);
    } else if (Index === 1) {
      setIndex(DataSlider.length);
      setI(DataSlider.length);
    }
  };

  const moveDot = (index) => {
    setIndex(index);
  };

  return (
    <div className="container-slider">
      <Link to={`/article/${DataSlider[Index-1].id}`}>
        <div
          onClick={() => console.log(DataSlider[Index - 1].id)}
          key={DataSlider[Index - 1].id}
          className={Index === I ? "slide active-anim" : "slide"}
        >
          <img
            src={DataSlider[Index-1].image}
            alt="slider"
          />
          <h1 className="heading-slider">{DataSlider[Index - 1].title}</h1>
        </div>
      </Link>
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: DataSlider.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={Index === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
