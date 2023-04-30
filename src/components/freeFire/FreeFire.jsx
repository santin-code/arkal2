import React from "react";
import "./free_fire.css";
import {GiDiamondHard} from 'react-icons/gi'

const FreeFire = () => {
  return (
    <div >
      <h1 className="free_fire_title">FREE FIRE</h1>
      <div className="free_fire_container">
        <img
          className="free_fire_gif"
          src="https://i.giphy.com/media/Bk1etlqzsxWNSi0HFn/giphy.webp"
          alt="free_fire"
        />
        <div className="advertising">
          <GiDiamondHard className="icon_diamond" />
          <div className="diamond_description">110 Diamantes: <div className="price_diamond"> MXN $19 <span className="asterisk"> *</span> </div> </div>
          <div className="diamond_description">341 Diamantes: <div className="price_diamond"> MXN $59 <span className="asterisk"> *</span> </div> </div>
          <div className="diamond_description">572 Diamantes: <div className="price_diamond"> MXN $99 <span className="asterisk"> *</span> </div> </div>
          <div className="diamond_description">1,166 Diamantes: <div className="price_diamond"> MXN $199 <span className="asterisk"> *</span> </div> </div>
          <div className="diamond_description">2,398 Diamantes: <div className="price_diamond"> MXN $379 <span className="asterisk"> *</span> </div> </div>
        </div>
      </div>
    </div>
  );
};

export default FreeFire;
