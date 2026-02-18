import React, { useState } from "react";
import {
  FaJava,
  FaPhp,
  FaHtml5,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaWordpress,
  FaApple,
  FaAndroid,
  FaAws,
  FaMicrosoft
} from "react-icons/fa";

import {
  SiMagento,
  SiShopify,
  SiGooglecloud
} from "react-icons/si";


import "./Header.css";

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="header">
      <div className="container-fluid">
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            <img
              src="https://exoticinfotech.com/Company%20%20Logo.png"
              alt="Exotic Infotech"
            />
          </a>

          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#" className="nav-link">Company</a>
            </li>

            <li
              className="nav-item"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="nav-link active">
                Services
              </button>

              {servicesOpen && (
                <div className="mega-menu">
                  <div className="mega-grid">

                    <div>
                      <h4>Web Development</h4>
                      <a href="#"><FaJava /> Java Development</a>
                      <a href="#"><FaPhp /> PHP Development</a>
                      <a href="#"><FaHtml5 /> HTML5</a>
                    </div>

                    <div>
                      <h4>JavaScript Framework</h4>
                      <a href="#"><FaReact /> React Development</a>
                      <a href="#"><FaAngular /> Angular Development</a>
                      <a href="#"><FaNodeJs /> NodeJS Development</a>
                    </div>

                    <div>
                      <h4>Ecommerce</h4>
                      <a href="#"><FaWordpress /> WordPress</a>
                      <a href="#"><SiMagento /> Magento</a>
                      <a href="#"><SiShopify /> Shopify</a>
                    </div>

                    <div>
                      <h4>Mobile App</h4>
                      <a href="#"><FaReact /> React Native</a>
                      <a href="#"><FaApple /> iOS Native</a>
                      <a href="#"><FaAndroid /> Android Native</a>
                    </div>

                    <div>
                      <h4>Cloud & DevOps</h4>
                      <a href="#"><FaAws /> AWS</a>
                      <a href="#"><FaMicrosoft /> Azure</a>

                      <a href="#"><SiGooglecloud /> Google Cloud</a>
                    </div>

                    <div>
                      <h4>Trending Tech</h4>
                      <a href="#"><FaReact /> AI Integration</a>
                      <a href="#"><FaMicrosoft /> Power BI</a>
                      <a href="#"><FaNodeJs /> Blockchain</a>
                    </div>

                  </div>
                </div>
              )}
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">Portfolio</a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">Blog</a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">Industries</a>
            </li>

            <li>
              <button className="contact-btn">Let's Connect</button>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
