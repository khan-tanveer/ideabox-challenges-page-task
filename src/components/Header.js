import React from "react";
import "./Header.css";
import BellIcon from "../images/BellIcon.svg";
import Avatar from "../images/Avatar.svg";
import Home from "../images/Home.svg";
import Dashboard from "../images/Dashboard.svg";
import Menubar from "../images/Menubar.svg";
import search from "../images/search.svg";
import notificationSide from "../images/notificationSide.svg";

const header = () => {
  return (
    <div className="header">
      {/* small................................ */}
      <div className="header__smalls">
        <div className="header__bars">
          <img
            className="header__menubar"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>

        <div className="header__Title">
          <div>
            <h4>Home</h4>
          </div>
          <div className="header__menuIcons">
            <img className="header__menuIconSingle" src={search} alt="" />
            <img
              className="header__menuIconSingle"
              src={notificationSide}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* big........................ */}
      <img
        className="header__logo"
        src="http://idea1.cxdeployer.com/static/media/idea-deployer-logo.0aa5eb2c.svg"
        alt=""
      />

      <div className="header__menu">
        <ul>
          <li>
            <img className="header__menuLogo" src={Home} alt="" />
            Home
          </li>
          <li>
            <img className="header__menuLogo" src={Dashboard} alt="" />
            dashboard
          </li>
          <li>Post an idea</li>
        </ul>
      </div>

      <div className="header__extra">
        <input placeholder="search" />
        <img className="header__avatar" src={BellIcon} alt="" />

        <img
          className="header__avatar"
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
    </div>
  );
};

export default header;
