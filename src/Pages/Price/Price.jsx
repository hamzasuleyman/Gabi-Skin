import React from "react";
import "./price.css";
import miniOne from "../../assets/price1.png";
import miniTwo from "../../assets/price2.png";
import miniThree from "../../assets/price3.png";
import fullOne from "../../assets/price4.png";
import fullTwo from "../../assets/price5.png";
import customOne from "../../assets/price6.png";

function Price() {
  return (
    <div className="gabiskin__price">
      <p className="gabiskin__price-title">Pricing table</p>
      <div className="gabiskin__price-main">
        <div className="pricing-table-wrapper">
          <ul className="pricing-table">
            <li className="pricing-table__item pricing-table__item-three">
              <img
                src={customOne}
                alt=""
                className="pricing-table__img customOne"
              />
              <a href="">
                <h3 className="pricing-table__title">Custom Stickers</h3>
              </a>
              <p className="pricing-table__description">
                <span className="pricing-table__tagline">
                  Here is Price package for our Custom Stickers
                </span>
              </p>
              <ul className="pricing-table__products">
                <li className="pricing-table__product margin">
                  🎆 Custom Mini-Stickers - 100 ETB
                </li>
              </ul>
              <a href="">
                <button className="pricing-table__button">continue</button>
              </a>
            </li>
            <li className="pricing-table__item pricing-table__item-one">
              <img
                src={miniOne}
                alt="mini one"
                className="pricing-table__img mini miniOne"
              />
              <img
                src={miniTwo}
                alt="mini one"
                className="pricing-table__img mini miniTwo"
              />
              <img
                src={miniThree}
                alt="mini one"
                className="pricing-table__img mini miniThree"
              />
              <a href="">
                <h3 className="pricing-table__title">Mini Stickers</h3>
              </a>
              <p className="pricing-table__description">
                <span className="pricing-table__tagline">
                  Here is Price package for our Mini stickers
                </span>
              </p>
              <ul className="pricing-table__products">
                <li className="pricing-table__product">
                  🔴 Small-sized (5-7 cm) - 30 ETB
                </li>
                <li className="pricing-table__product">
                  🟡 Medium-sized (7-10 cm) - 40 ETB
                </li>
                <li className="pricing-table__product pricing-table__product--excluded">
                  🔵 Big-sized (10-15 cm) - 50 ETB
                </li>
              </ul>
              <a href="">
                <button className="pricing-table__button">continue</button>
              </a>
            </li>
            <li
              className="pricing-table__item pricing-table__item--popular pricing-table__item-two"
              data-popular="Popular"
            >
              <img
                src={fullOne}
                alt="full one"
                className="pricing-table__img fullOne"
              />
              <img
                src={fullTwo}
                alt="full two"
                className="pricing-table__img fullTwo"
              />
              <a href="">
                <h3 className="pricing-table__title">Full-Skin Stickers</h3>
              </a>
              <p className="pricing-table__description">
                <span className="pricing-table__tagline">
                  Here is Price package for our Full Skin Stickers
                </span>
              </p>
              <ul className="pricing-table__products">
                <li className="pricing-table__product margin">
                  🌓 Half package Laptop skin - sticker only for the back of
                  your screen - 300 ETB
                </li>
                <li className="pricing-table__product margin">
                  🌕 Full package Laptop skin - Front and back ( For the back of
                  your screen + on the keyboard area ) - 500 ETB
                </li>
                <li className="pricing-table__product pricing-table__product--excluded margin">
                  ⭐️ Urgent Half package - 1 Day walk in or Delivery 800 ETB
                </li>
                <li className="pricing-table__product pricing-table__product--excluded">
                  ⭐️ Urgent Full package - 1 Day walk in or Delivery 1000 ETB
                </li>
              </ul>
              <a href="">
                <button className="pricing-table__button">continue</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Price;
