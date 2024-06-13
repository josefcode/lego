import React, { useState } from "react";
import brandIcon from "../../../public/brandLogo.svg";
import categoryIcon from "../../../public/menuIcon.svg";
import searchIcon from "../../../public/search.png";
import shopcardIcon from "../../../public/shoppingbag.png";
import messageIcon from "../../../public/message.png";
import chevronsdown from "../../../public/chevronsdown.png";
import FullscreenMenu from "./CategoryMenu"; // Import the new component

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
          <li className="navbar__linkContainer">
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
        <h1 className="video__title">
          <p>Welcome to the</p>
          <span>Play Matters Interactive Lookbook</span>
        </h1>
        <div className="video__iconsWrapper">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="78"
              height="78"
              rx="39"
              fill="#F5F5F5"
              fill-opacity="0.4"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M38.6667 30.667L32.0001 36.0003H26.6667V44.0003H32.0001L38.6667 49.3337V30.667Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M54.6667 36L46.6667 44"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M46.6667 36L54.6667 44"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="64"
            height="64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="62"
              height="62"
              rx="31"
              fill="#F5F5F5"
              fill-opacity=".4"
              stroke="#fff"
              stroke-width="2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23 19.18c0-.652.528-1.18 1.18-1.18H26v3h-3v-1.82ZM23 23h3v3h-3v-3Zm0 5h3v3h-3v-3Zm0 5h3v3h-1.82A1.18 1.18 0 0 1 23 34.82V33Zm5 3v-8h8v8h-8Zm10 0v-3h3v1.82A1.18 1.18 0 0 1 39.82 36H38Zm3-5h-3v-3h3v3Zm0-5h-3v-3h3v3Zm0-5h-3v-3h1.82c.652 0 1.18.528 1.18 1.18V21Zm-5-3v8h-8v-8h8Zm1-2h2.82A3.18 3.18 0 0 1 43 19.18v15.64A3.18 3.18 0 0 1 39.82 38H24.18A3.18 3.18 0 0 1 21 34.82V19.18A3.18 3.18 0 0 1 24.18 16H37Z"
              fill="#fff"
            />
            <path
              d="m29 44 3 3 3-3M32 47v-6"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
      <FullscreenMenu show={showMenu} onClose={() => setMenu(false)} />
    </header>
  );
};
