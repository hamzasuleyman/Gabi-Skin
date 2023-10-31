import React from "react";
import "./category.css";
import One from "../assets/p1.png";
import Two from "../assets/p2.png";
import Three from "../assets/p3.png";
import Four from "../assets/p4.png";
import Five from "../assets/p5.png";
import Six from "../assets/p6.png";

function Category() {
  return (
    <div className="gabiskin__category">
      <h1 className="gabiskin__category-title">Category Stickers</h1>
      <div className="gabiskin__category-main__title">
        <p className="top">Programming</p>
        <p>Movie</p>
        <p>Music</p>
        <p>Amharic</p>
        <p>Football</p>
        <p>Holy</p>
        <p>Animation</p>
        <p>Animi</p>
        <p>Series</p>
        <p>English</p>
        <p>Gaming</p>
      </div>
      <div className="gabiskin__category-main__product">
        <div className="gabiskin__category-main__product-main">
          <div className="gabiskin__category-main__product-main__image gabiskin__category-main__product-main__image-one">
            <img src={One} alt="one" />
          </div>
          <div className="gabiskin__category-main__product-main__text">
            <p className="gabiskin__category-main__product-main__text-one">C#</p>
            <button className="gabiskin__category-main__product-main__button">
              Order Now
            </button>
          </div>
        </div>
        <div className="gabiskin__category-main__product-main">
          <div className="gabiskin__category-main__product-main__image gabiskin__category-main__product-main__image-two">
            <img src={Two} alt="two" />
          </div>
          <div className="gabiskin__category-main__product-main__text">
            <p className="gabiskin__category-main__product-main__text-one">
              JavaScript
            </p>
            <button className="gabiskin__category-main__product-main__button">
              Order Now
            </button>
          </div>
        </div>
        <div className="gabiskin__category-main__product-main">
          <div className="gabiskin__category-main__product-main__image">
            <img src={Three} alt="three" />
          </div>
          <div className="gabiskin__category-main__product-main__text">
            <p className="gabiskin__category-main__product-main__text-one">HTML</p>
            <button className="gabiskin__category-main__product-main__button">
              Order Now
            </button>
          </div>
        </div>
        <div className="gabiskin__category-main__product-main">
          <div className="gabiskin__category-main__product-main__image gabiskin__category-main__product-main__image-five">
            <img src={Four} alt="four" />
          </div>
          <div className="gabiskin__category-main__product-main__text">
            <p className="gabiskin__category-main__product-main__text-one">CSS</p>
            <button className="gabiskin__category-main__product-main__button">
              Order Now
            </button>
          </div>
        </div>
        <div className="gabiskin__category-main__product-main">
          <div className="gabiskin__category-main__product-main__image">
            <img src={Five} alt="five" />
          </div>
          <div className="gabiskin__category-main__product-main__text">
            <p className="gabiskin__category-main__product-main__text-one">Java</p>
            <button className="gabiskin__category-main__product-main__button">
              Order Now
            </button>
          </div>
        </div>
        <div className="gabiskin__category-main__product-main">
          <div className="gabiskin__category-main__product-main__image gabiskin__category-main__product-main__image-six">
            <img src={Six} alt="six" />
          </div>
          <div className="gabiskin__category-main__product-main__text">
            <p className="gabiskin__category-main__product-main__text-one">Code</p>
            <button className="gabiskin__category-main__product-main__button">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
