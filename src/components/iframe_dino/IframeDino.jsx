import React from "react";
import "./iframe_dino.css";

const IframeDino = () => {
  return (
    <div className="dino_container">
        <iframe
          className="iframe_dino"
          src="https://i.giphy.com/media/Bk1etlqzsxWNSi0HFn/giphy.webp" title="dino"
        ></iframe>
    </div>
  );
};

export default IframeDino;
