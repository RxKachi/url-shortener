import React, { useState } from "react";
import {Logo} from '../../img';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header-top">
      <div className="brand">
          <img src={Logo} alt=""/>
      </div>
      <nav className="nav">
        <div className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
          <div className={`nav-menu ${!showMenu ? 'hide' : ''}`}>
            <div className="left-nav">
              <ul className="nav-listing">
                <li className="nav-item" onClick={() => setShowMenu(false)}>Features</li>
                <li className="nav-item">Pricing</li>
                <li className="nav-item">Resources</li>
              </ul>
            </div>
            <div className="right-nav">
              <ul className="nav-listing">
                <li className="nav-item">Login</li>
                <li className="nav-item">Sign Up</li>
              </ul>
            </div>
          </div>
      </nav>
    </header>
  );
};

export default Nav;
