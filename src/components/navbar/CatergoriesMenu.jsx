import React from "react";
import brandIcon from "../../../public/brandLogo.svg";
import architecture from "../../../public/menuimage/architecture.png";
import city from "../../../public/menuimage/city.png";
import creator from "../../../public/menuimage/creator.png";
import dots from "../../../public/menuimage/dots.png";
import duplo from "../../../public/menuimage/duplo.png";
import friends from "../../../public/menuimage/friends.png";
import ideas from "../../../public/menuimage/ideas.png";
import minifigures from "../../../public/menuimage/minifigures.png";
import technic from "../../../public/menuimage/technic.png";
import closeIcon from "../../../public/menuimage/closeIcon.png";
import shopcardIcon from "../../../public/shoppingbag.png";
import homeIcon from "../../../public/home.png";
import messageIcon from "../../../public/message.png";

const CatergoriesMenu = ({ show, onClose }) => {
  return (
    <div className={`fullscreen-menu ${show ? "show" : ""}`}>
      <div className="fullscreen-menu__sidebar">
        <div className="sidebarIcons">
          <img
            className="fullscreen-menu__logo"
            src={brandIcon}
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
              src={homeIcon}
              alt="The Broadway Brother logo"
            />
            <span className="navbar__linkText" onClick={onClose}>
              Home
            </span>
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
            <p>Themes</p>
          </div>
          <ul className="themeList">
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
        <div>
          <img src={architecture} alt="Architecture" />
        </div>
        <div>
          <img src={city} alt="City" />
        </div>
        <div>
          <img src={creator} alt="Creator" />
        </div>
        <div>
          <img src={dots} alt="Dots" />
        </div>
        <div>
          <img src={duplo} alt="Duplo" />
        </div>
        <div>
          <img src={friends} alt="Friends" />
        </div>
        <div>
          <img src={ideas} alt="Ideas" />
        </div>
        <div>
          <img src={minifigures} alt="Minifigures" />
        </div>
        <div>
          <img src={technic} alt="Technic" />
        </div>
      </div>
    </div>
  );
};

export default CatergoriesMenu;
