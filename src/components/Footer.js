import React from "react";
import Logo from "./layouts/Logo";
import { FbImg, InstaImg, PinImg, TwitImg } from "../img";

const Footer = (props) => {
  return (
    <footer className="footer">
      <Logo />
      <div className='footer-links'>
        <div className="link-listing">
          <h3 className="heading">Features</h3>
          <ul className="links">
            <li className="link">
              <a href="#!">Link Shortening</a>
            </li>
            <li className="link">
              <a href="#!">Branded Links</a>
            </li>
            <li className="link">
              <a href="#!">Analytics</a>
            </li>
          </ul>
        </div>
        <div className="link-listing">
          <h3 className="heading">Resources</h3>
          <ul className="links">
            <li className="link">
              <a href="#!">Blog</a>
            </li>
            <li className="link">
              <a href="#!">Developers</a>
            </li>
            <li className="link">
              <a href="#!">Support</a>
            </li>
          </ul>
        </div>
        <div className="link-listing">
          <h3 className="heading">Company</h3>
          <ul className="links">
            <li className="link">
              <a href="#!">About</a>
            </li>
            <li className="link">
              <a href="#!">Our Team</a>
            </li>
            <li className="link">
              <a href="#!">Careers</a>
            </li>
            <li className="link">
              <a href="#!">Contact</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <img src={FbImg} alt="" />
          <img src={TwitImg} alt="" />
          <img src={PinImg} alt="" />
          <img src={InstaImg} alt="" />
        </div>
      </div>
      {/* <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://paulonyekwelu.com">Paul Onyekwelu</a>.
      </div> */}
    </footer>
  );
};

export default Footer;
