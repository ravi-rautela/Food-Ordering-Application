import React, { useState } from "react";
import { assets } from "../../assets/assets";

import "./Navbar.css";

const Navbar = () => {
  const [currentMenu, setCurrentMenu] = useState("Home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setCurrentMenu("Home")}
          className={currentMenu === "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setCurrentMenu("Menu")}
          className={currentMenu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setCurrentMenu("Mobile app")}
          className={currentMenu === "Mobile app" ? "active" : ""}
        >
          Mobile app
        </li>
        <li
          onClick={() => setCurrentMenu("Contact us")}
          className={currentMenu === "Contact us" ? "active" : ""}
        >
          Contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
