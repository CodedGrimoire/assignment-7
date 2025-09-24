import React from "react";
import "./footer.css";
import { FaTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="footer-main-part">
     
      <div className="footer-about">
        <h3>CS — Ticket System</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

     
      <div className="footer-links">
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Our Mission</a></li>
            <li><a href="">Contact Saled</a></li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="">Products & Services</a></li>
            <li><a href="">Customer Stories</a></li>
            <li><a href="">Download Apps</a></li>
          </ul>
        </div>

        <div>
          <h4>Information</h4>
          <ul>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">Join Us</a></li>
          </ul>
        </div>

        <div>
          <h4>Social Links</h4>
          <ul className="social">
            <li><a href=""><FaTwitter /> @CS — Ticket System</a></li>
            <li><a href=""><FaLinkedin /> @CS — Ticket System</a></li>
            <li><a href=""><FaFacebook /> @CS — Ticket System</a></li>
            <li><a href="mailto:support@cst.com"><FaEnvelope /> support@cst.com</a></li>
          </ul>
        </div>
      </div>
    </div>

   
    <div className="footer-bottom">
      <p>© 2025 CS — Ticket System. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
