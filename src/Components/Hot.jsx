import React from "react";
import "./hot.css";
import hotOne from "../assets/hotone.png";
import hotTwo from "../assets/hottwo.png";
import hotThree from "../assets/hotthree.png";
import hotFour from "../assets/hotfour.png";
import hotFive from "../assets/hotfive.png";
import hotSix from "../assets/hotsix.png";
import hotSeven from "../assets/hotseven.png";
import hotEight from "../assets/hoteight.png";
import hotNine from "../assets/hotnine.png";
import hotTen from "../assets/hotten.png";
import hotEleven from "../assets/hoteleven.png";
import hotTwelve from "../assets/hottwelve.png";
import hotThirteen from "../assets/hotthirteen.png";

function Hot() {
  return (
    <div className="gabiskin__hot">
      <h1 className="gabiskin__hot-title">Hot Stickers</h1>
      <div className="gabiskin__hot-main">
        <ul>
          <div className="gabiskin__hot-main__first">
            <a href="">
              <p className="hot-title">Engish</p>
              <img src={hotOne} alt="one" />
              <p className="hot-price">
                ETB 20
                <small>
                  <del>ETB 50</del>
                </small>
              </p>
            </a>
            <a href="">
              <button className="hot__price-button">Order Now</button>
            </a>
          </div>
          <div className="gabiskin__hot-main__second">
            <a href="">
              <p className="hot-title">Engish</p>
              <img src={hotTwo} alt="two" />
              <p className="hot-price">
                ETB 20
                <small>
                  <del>ETB 50</del>
                </small>
              </p>
            </a>
            <a href="">
              <button className="hot__price-button">Order Now</button>
            </a>
          </div>
          <div className="gabiskin__hot-main__third">
            <a href="">
              <p className="hot-title">Movie</p>
              <img src={hotThree} alt="three" />
              <p className="hot-price">
                ETB 20
                <small>
                  <del>ETB 50</del>
                </small>
              </p>
            </a>
            <a href="">
              <button className="hot__price-button">Order Now</button>
            </a>
          </div>
          <div className="gabiskin__hot-main__fourth">
            <a href="">
              <p className="hot-title">Game</p>
              <img src={hotFour} alt="four" />
              <p className="hot-price">
                ETB 20
                <small>
                  <del>ETB 50</del>
                </small>
              </p>
            </a>
            <a href="">
              <button className="hot__price-button">Order Now</button>
            </a>
          </div>
          <div className="gabiskin__hot-main__fivth">
            <a href="">
              <p className="hot-title">Movie</p>
              <img src={hotFive} alt="five" />
              <p className="hot-price">
                ETB 20
                <small>
                  <del>ETB 50</del>
                </small>
              </p>
            </a>
            <a href="">
              <button className="hot__price-button">Order Now</button>
            </a>
          </div>

          <div className="gabiskin__hot-main__sixth">
            <a href="">
              <p className="hot-title">Football</p>
              <img src={hotSix} alt="six" />
              <p className="hot-price">
                ETB 20
                <small>
                  <del>ETB 50</del>
                </small>
              </p>
            </a>
            <a href="">
              <button className="hot__price-button">Order Now</button>
            </a>
          </div>
          <div className="gabiskin__hot-main__seventh">
            <a href="">
              <p className="hot-title">Holy</p>
              <img src={hotSeven} alt="seven" />
              <p className="hot-price">
                ETB 20
                <small>
                  <del>ETB 50</del>
                </small>
              </p>
            </a>
            <a href="">
              <button className="hot__price-button">Order Now</button>
            </a>
          </div>
          <div className="gabiskin__hot-main__eighth">
            <a href="">
              <p className="hot-title">Series</p>
              <img src={hotEight} alt="eight" />
              <p className="hot-price">
                ETB 20
                <small>
                  <del>ETB 50</del>
                </small>
              </p>
            </a>
            <a href="">
              <button className="hot__price-button">Order Now</button>
            </a>
          </div>
          <div className="gabiskin__hot-main__nineth">
            <a href="">
              <p className="hot-title">Tech</p>
              <img src={hotNine} alt="nine" />
              <p className="hot-price">
                ETB 20
                <small>
                  <del>ETB 50</del>
                </small>
              </p>
            </a>
            <a href="">
              <button className="hot__price-button">Order Now</button>
            </a>
          </div>
          <div className="gabiskin__hot-main__tenth">
            <a href="">
              <p className="hot-title">Football</p>
              <img src={hotTen} alt="ten" />
              <p className="hot-price">
                ETB 20
                <small>
                  <del>ETB 50</del>
                </small>
              </p>
            </a>
            <a href="">
              <button className="hot__price-button">Order Now</button>
            </a>
          </div>
          <div className="gabiskin__hot-main__eleventh">
            <a href="">
              <p className="hot-title">Programm</p>
              <img src={hotEleven} alt="eleven" />
              <p className="hot-price">
                ETB 20
                <small>
                  <del>ETB 50</del>
                </small>
              </p>
            </a>
            <a href="">
              <button className="hot__price-button">Order Now</button>
            </a>
          </div>
          <div className="gabiskin__hot-main__twelveth">
            <a href="">
              <p className="hot-title">Programm</p>
              <img src={hotTwelve} alt="twelve" />
              <p className="hot-price">
                ETB 20
                <small>
                  <del>ETB 50</del>
                </small>
              </p>
            </a>
            <a href="">
              <button className="hot__price-button">Order Now</button>
            </a>
          </div>
          <div className="gabiskin__hot-main__thirteenth">
            <a href="">
              <p className="hot-title">Programm</p>
              <img src={hotThirteen} alt="thirteen" />
              <p className="hot-price">
                ETB 20
                <small>
                  <del>ETB 50</del>
                </small>
              </p>
            </a>
            <a href="">
              <button className="hot__price-button">Order Now</button>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Hot;
