import React from "react";
import "./FooterSection.css";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="footer-left">
          
          <span style={{ color: "#ffffff" }}>© 2025 Exotic Infotech. All rights reserved.</span>
        </div>
        <div className="separator"></div>
        <div className="topbar-item">
          <img src="https://flagcdn.com/in.svg" alt="India" className="flag" />
          <span>India +91 8511624907 / +91 76218 33798</span>
        </div>
        <div className="separator"></div>
        <div className="topbar-item">
          <FaEnvelope className="mail-icon" />
          <span>Info@exoticinfo.com</span>
        </div>
        <div className="topbar-item">
          <FaMapMarkerAlt className="location-icon" />
          <span>
            B-315,Alpha Arcades,Near Mipco Chowkdi, GIDC, Bharuch, Gujarat
            392001
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
