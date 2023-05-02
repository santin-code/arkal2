import React from "react";
import "./free_fire.css";
import { GiDiamondHard } from "react-icons/gi";

const FreeFire = () => {
  return (
      <div className="title_subtitle_container">
      <img
        className="free_fire_title"
        src="https://fontmeme.com/permalink/230430/73495cded1cca4dfe37debaab0605df3.png"
        alt="title free fire"
      />
      <div className="free_fire_container">
          <img
            className="free_fire_gif"
            src="https://i.giphy.com/media/Bk1etlqzsxWNSi0HFn/giphy.webp"
            alt="free_fire"
          />
        <div className="advertising">
          <GiDiamondHard className="icon_diamond" />
          <div className="diamond_description">
            110 Diamantes:{" "}
            <div className="price_diamond">
              {" "}
              MXN $27 {" "}
            </div>{" "}
          </div>
          <div className="diamond_description">
            341 Diamantes:{" "}
            <div className="price_diamond">
              {" "}
              MXN $67 {" "}
            </div>{" "}
          </div>
          <div className="diamond_description">
            572 Diamantes:{" "}
            <div className="price_diamond">
              {" "}
              MXN $107 {" "}
            </div>{" "}
          </div>
          <div className="diamond_description">
            1,166 Diamantes:{" "}
            <div className="price_diamond">
              {" "}
              MXN $207 {" "}
            </div>{" "}
          </div>
          <div className="diamond_description">
            2,398 Diamantes:{" "}
            <div className="price_diamond">
              {" "}
              MXN $387 {" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeFire;
