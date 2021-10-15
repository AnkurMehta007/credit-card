import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-heading">Our social media handles</div>
        <div className="social-media-icons">
          <ul>
            <li>
              <Link to="#">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
