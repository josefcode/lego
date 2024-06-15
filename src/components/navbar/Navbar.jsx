import React, { useState } from "react";
import brandIcon from "../../../public/brandLogo.svg";
import categoryIcon from "../../../public/menuIcon.svg";
import searchIcon from "../../../public/search.png";
import shopcardIcon from "../../../public/shoppingbag.png";
import messageIcon from "../../../public/message.png";
import chevronsdown from "../../../public/chevronsdown.png";
import FullscreenMenu from "./CatergoriesMenu"; // Import the new component
import shoundbtn from "../../../public/soundButton.svg";
import downloadBtn from "../../../public/download.svg";
import CatergoriesMenu from "./CatergoriesMenu";

export const Navbar = () => {
  const [showMenu, setMenu] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar__nav">
        <ul className="navbar__navIcons">
          <li>
            <img
              className="navbar__logo"
              src={brandIcon}
              alt="The Broadway Brother logo"
            />
          </li>
          <li className="navbar__navCategory">
            {!showMenu && (
              <button onClick={() => setMenu(true)}>
                <img
                  className="navbar__logoCategory"
                  src={categoryIcon}
                  alt="The Broadway Brother logo"
                />
                <span>Categories</span>
              </button>
            )}
          </li>
        </ul>

        <ul className="navbar__links">
          <li className="navbar__link">Gifting</li>
          <li className="navbar__link">Travel</li>
          <li className="navbar__link">Adults Welcome</li>
          <li className="navbar__link">Art & Home Décor </li>
          <li className="navbar__link">Space</li>
          <li className="navbar__link">Pop Culture</li>
          <li className="navbar__link">Toddlers</li>
          <li className="navbar__link">Real World Role Playing </li>
        </ul>

        <ul className="navbar__icons">
          <li className="navbar__linkContainer">
            <img
              className="navbar__linkLogo"
              src={searchIcon}
              alt="The Broadway Brother logo"
            />
            <span className="navbar__linkText">Contact us</span>
          </li>
          <li className="navbar__linkContainer">
            <img
              className="navbar__linkLogo"
              src={shopcardIcon}
              alt="The Broadway Brother logo"
            />
            <span className="navbar__linkText">Request</span>
          </li>
          <li className="navbar__linkContainer search">
            <img
              className="navbar__linkLogo"
              src={messageIcon}
              alt="The Broadway Brother logo"
            />
            <span className="navbar__linkText">Search</span>
          </li>
        </ul>
      </nav>
      <div className="video">
        <div className="video__frame"></div>
        <div className="videoInfos">
          <h1 className="video__title">
            <div>Welcome to the</div>
            <div>Play Matters Interactive Lookbook</div>
          </h1>

          <div className="video__iconsWrapper">
            <img src={shoundbtn} alt="" className="soundBtn" />
            <img src={downloadBtn} alt="" className="downloadBtn" />
          </div>
        </div>
      </div>
      <div className="navbar__scrollWrapper">
        <span className="video__scrollText">Scroll down</span>
        <img
          className="video__scrollIcon"
          src={chevronsdown}
          alt="The Broadway Brother logo"
        />
      </div>
      <CatergoriesMenu show={showMenu} onClose={() => setMenu(false)} />
    </header>
  );
};
