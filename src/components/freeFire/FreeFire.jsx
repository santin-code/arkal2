import React from "react";
import "./free_fire.css";

const FreeFire = () => {
  return (
    <>
      <div className="free_fire_container">
        <img
          className="free_fire"
          src="https://i.giphy.com/media/Bk1etlqzsxWNSi0HFn/giphy.webp"
          alt="free_fire"
        />
        <div className="advertising">
          <div className="diamond">110 DIAMANTES | MXN $19 </div>
          <div className="diamond">341 DIAMANTES | MXN $59 </div>
          <div className="diamond">572 DIAMANTES | MXN $99 </div>
          <div className="diamond">2,398 DIAMANTES | MXN $199 </div>
        </div>
      </div>
    </>
  );
};

export default FreeFire;
