import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner-content">
        <div className="footer-logo">
          <a href="#">
            <div>
              <img src="https://growthschool.io/wp-content/uploads/2021/08/image-69.png" />
            </div>
          </a>
        </div>
        <div className="footer-link">
          <li>
            <div>
              <h6 className="header-growth-school">Growth School</h6>
              <ul className="footer-link-one">
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Community</a>
                </li>
              </ul>
            </div>
          </li>
        </div>
        <div className="footer-link">
          <li>
            <div>
              <h6></h6>
              <ul className="footer-link-two">
                <li>
                  <a href="">Workshops</a>
                </li>
                <li>
                  <a href="">Programs</a>
                </li>
              </ul>
            </div>
          </li>
        </div>
        <div className="footer-link">
          <li>
            <div>
              <h6></h6>
              <ul className="footer-link-three">
                <li>
                  <a href="">Apply as Mentor</a>
                </li>
                <li>
                  <a href="">Login</a>
                </li>
              </ul>
            </div>
          </li>
        </div>
        <div className="social-link">
          <li>
            <div>
              <h5 className="more-info">Need more info?</h5>
              <ul>
                <li>
                  <a href="">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="">
                    <AiOutlineInstagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FiTwitter />
                  </a>
                </li>
              </ul>
              <div className="social-main-btn">
                <a href=""> Contact us</a>
              </div>
            </div>
          </li>
        </div>
      </div>
      <Fade bottom>
        <img
          src="https://growthschool.io/wp-content/themes/growth-school/img/footer-arrow.svg"
          className="footer-arrow"
        />
      </Fade>

      <div className="copy-right">
        <div>
          <ul>
            <li>©️ GrowthSchool 2022</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;