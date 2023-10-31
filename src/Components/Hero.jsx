import React, { useState, useEffect } from "react";
import "./hero.css";
import heroOne from "../assets/imgSliderOne.png";
import heroTwo from "../assets/imgSliderTwo.png";
import heroThree from "../assets/imgSliderThree.png";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeSliderValue, setTimeSliderValue] = useState(0);

  const incrementSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const decrementSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    if (currentSlide < 0) {
      setCurrentSlide(2);
    } else if (currentSlide > 2) {
      setCurrentSlide(0);
    }
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSliderValue(timeSliderValue + 500);
      if (timeSliderValue === 2000) {
        setCurrentSlide(currentSlide + 1);
        setTimeout(() => {
          setTimeSliderValue(0);
        }, 500);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [timeSliderValue, currentSlide]);

  function slider(slideIndex) {
    if (slideIndex === 0) {
      return slide1();
    } else if (slideIndex === 1) {
      return slide2();
    } else if (slideIndex === 2) {
      return slide3();
    } else {
      setCurrentSlide(0);
      return slide1();
    }
  }

  function slide1() {
    return (
      <div className={`gabiskin__hero__firstslider`}>
        <div className="gabiskin__hero__firstslider-leftside">
          <div className="gabiskin__hero__firstslider-leftside-main">
            <p className="title">Gabi Skin</p>
            <p>
              <i>Lorem ipsum dolor sit amet consectetur adipisicing elit</i>
            </p>
            <div className="price">
              ETB 100
              <small>
                <del>ETB 150</del>
              </small>
            </div>
            <button className="shopnow-button">Shop now</button>
          </div>
        </div>
        <div className="gabiskin__hero__firstslider-rightside">
          <div className="gabiskin__hero__firstslider-rightside-main">
            <img src={heroOne} alt="one" />
          </div>
        </div>
      </div>
    );
  }
  function slide2() {
    return (
      <div className={`gabiskin__hero__secondslider`}>
        <div className="gabiskin__hero__secondslider-leftside">
          <div className="gabiskin__hero__secondslider-leftside-main">
            <p className="title">Gabi Skin</p>
            <p>
              <i>Lorem ipsum dolor sit amet consectetur adipisicing elit</i>
            </p>
            <div className="price">
              ETB 100
              <small>
                <del>ETB 150</del>
              </small>
            </div>
            <button className="shopnow-button">Shop now</button>
          </div>
        </div>
        <div className="gabiskin__hero__secondslider-rightside">
          <div className="gabiskin__hero__secondslider-rightside-main">
            <img src={heroTwo} alt="two" />
          </div>
        </div>
      </div>
    );
  }
  function slide3() {
    return (
      <div className={`gabiskin__hero__thirdslider`}>
        <div className="gabiskin__hero__thirdslider-leftside">
          <div className="gabiskin__hero__thirdslider-leftside-main">
            <p className="title">Gabi Skin</p>
            <p>
              <i>Lorem ipsum dolor sit amet consectetur adipisicing elit</i>
            </p>
            <div className="price">
              ETB 100
              <small>
                <del>ETB 150</del>
              </small>
            </div>
            <button className="shopnow-button">Shop now</button>
          </div>
        </div>
        <div className="gabiskin__hero__thirdslider-rightside">
          <div className="gabiskin__hero__thirdslider-rightside-main">
            <img src={heroThree} alt="three" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="gabiskin__hero">
      {currentSlide !== null && slider(currentSlide)}
      <div className="gabiskin__hero__buttons">
        <ArrowLeftRoundedIcon
          className="gabiskin__hero__button--left"
          onClick={decrementSlide}
        />

        <ArrowRightRoundedIcon
          className="gabiskin__hero__button--right"
          onClick={incrementSlide}
        />
      </div>
    </div>
  );
}

export default Hero;
