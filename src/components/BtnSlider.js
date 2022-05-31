import React from "react";
import "../styling/Slider.css";
import leftArrow from "../Assets/Slider-data/left-arrow.svg";
import rightArrow from "../Assets/Slider-data/right-arrow.svg";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        src={direction === "next" ? rightArrow : leftArrow}
        alt={direction === "next" ? "rightArrow" : "leftArrow"}
      />
    </button>
  );
};

export default BtnSlider;
