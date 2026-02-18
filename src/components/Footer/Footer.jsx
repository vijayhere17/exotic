import React from "react";
import logo from "../../assets/images/companylogo.png";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-main">
        <div className="footer-grid">

          {/* BRAND COLUMN */}
          <div className="footer-brand">
            <img src={logo} alt="Exotic Infotech" className="footer-logo" />

            <p>
              Exotic Infotech delivers innovative digital solutions,
              scalable software, and cutting-edge technologies that
              empower businesses to grow in the modern digital era.
            </p>

            <div className="footer-social">
              <a href="#"><Linkedin size={18} /></a>
              <a href="#"><Twitter size={18} /></a>
              <a href="#"><Facebook size={18} /></a>
              <a href="#"><Instagram size={18} /></a>
            </div>
          </div>

          {/* COMPANY */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Custom Software</li>
              <li>Cloud Solutions</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col contact-col">
            <h4>Contact</h4>

            <div className="contact-item">
              <Mail size={16} />
              <span>exoticinfotech8@gmail.com</span>
            </div>

            <div className="contact-item">
              <Phone size={16} />
              <span>+91 76218 33798</span>
            </div>

            <div className="contact-item">
              <MapPin size={35} />
              <span>
                Alpha Arcades, B-315, near Mipco Chowkdi,
                GIDC, Bharuch, Gujarat 392001
              </span>
            </div>
          </div>

        </div>
      </div>

     

    </footer>
  );
};

export default Footer;
