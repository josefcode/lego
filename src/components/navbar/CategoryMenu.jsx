import React from "react";
import brandIcon from "../../../public/brandLogo.svg";
import imageOne from "../../../public/menuimage/1.png";
import imageTwo from "../../../public/menuimage/2.png";
import imageThree from "../../../public/menuimage/3.png";
import imageFour from "../../../public/menuimage/4.png";
import imageFive from "../../../public/menuimage/5.png";
import imageSix from "../../../public/menuimage/6.png";
import imageSeven from "../../../public/menuimage/7.png";
import imageEight from "../../../public/menuimage/8.png";
import imageNine from "../../../public/menuimage/9.png";
import closeIcon from "../../../public/menuimage/closeIcon.png";
import shopcardIcon from "../../../public/shoppingbag.png";
import searchIcon from "../../../public/search.png";
import messageIcon from "../../../public/message.png";

const FullscreenMenu = ({ show, onClose }) => {
  return (
    <div className={`fullscreen-menu ${show ? "show" : ""}`}>
      <div className="fullscreen-menu__sidebar">
        <div>
          <img
            className="fullscreen-menu__logo"
            src={brandIcon} // Reusing the logo from the navbar
            alt="The Broadway Brother logo"
          />
          <img
            className="fullscreen-menu__close-icon"
            src={closeIcon}
            alt="Close"
            onClick={onClose}
          />
        </div>
        <ul className="fullscreen-menu__nav">
          <li>
            <img
              className="navbar__linkLogo"
              src={searchIcon}
              alt="The Broadway Brother logo"
            />
            <span className="navbar__linkText">Contact us</span>
          </li>
          <li>
            <img
              className="navbar__linkLogo"
              src={shopcardIcon}
              alt="The Broadway Brother logo"
            />
            <span className="navbar__linkText">Request</span>
          </li>
          <li>
            <img
              className="navbar__linkLogo"
              src={messageIcon}
              alt="The Broadway Brother logo"
            />
            <span className="navbar__linkText">Search</span>
          </li>
        </ul>
        <div className="fullscreen-menu__themes">
          <div className="themeWrapper">
            <div className="line"></div>
            <h3>Themes</h3>
          </div>
          <ul>
            <li>Gifting</li>
            <li>Travel</li>
            <li>Adults Welcome</li>
            <li>Art & Home Décor</li>
            <li>Space</li>
            <li>Pop Culture</li>
            <li>Toddlers</li>
            <li>Real World Role Playing</li>
          </ul>
        </div>
      </div>
      <div className="fullscreen-menu__grid">
        {/* Add your category images here */}
        <div>
          <img src={imageOne} alt="Architecture" />
        </div>
        <div>
          <img src={imageTwo} alt="City" />
        </div>
        <div>
          <img src={imageThree} alt="Creator" />
        </div>
        <div>
          <img src={imageFour} alt="Dots" />
        </div>
        <div>
          <img src={imageFive} alt="Duplo" />
        </div>
        <div>
          <img src={imageSix} alt="Friends" />
        </div>
        <div>
          <img src={imageSeven} alt="Ideas" />
        </div>
        <div>
          <img src={imageEight} alt="Minifigures" />
        </div>
        <div>
          <img src={imageNine} alt="Technic" />
        </div>
      </div>
    </div>
  );
};

export default FullscreenMenu;
