import React from "react";
import "./HeaderSection.css";
import { FaEnvelope } from "react-icons/fa";

const HeaderSection = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="separator"></div>
        <div className="topbar-item">
          <img
            src="https://flagcdn.com/in.svg"
            alt="India"
            className="flag"
          />
          <span>India +91 8511624907 / +91 76218 33798</span>
        </div>
        <div className="separator"></div>
        <div className="topbar-item">
          <FaEnvelope className="mail-icon" />
          <span>Info@exoticinfo.com</span>
        </div>

      </div>
    </div>
  );
};

export default HeaderSection;
