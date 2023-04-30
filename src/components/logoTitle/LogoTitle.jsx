import React from "react";
import './logo_title.css'
import { FaReact } from "react-icons/fa";

const LogoTitle = () => {
  return (
    <>
      <div className="logo">
        ARKAL <FaReact className="faReact" /> TECH
      </div>
      <div className="slogan">Simplifying your digital life</div>
    </>
  );
};

export default LogoTitle;
