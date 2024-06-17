import React, { useState } from "react";
import brandIcon from "../../../public/brandLogo.svg";
import categoryIcon from "../../../public/menuIcon.svg";
import searchIcon from "../../../public/search.png";
import shopcardIcon from "../../../public/shoppingbag.png";
import messageIcon from "../../../public/message.png";
import chevronsdown from "../../../public/chevronsdown.png";
import CatergoriesMenu from "./CatergoriesMenu";
import { Link } from "react-scroll";

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
          <li className="navbar__link">
            <Link
              activeClass="active"
              to="Gifting"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
            >
              Gifting
            </Link>
          </li>
          <li className="navbar__link">
            <Link
              activeClass="active"
              to="Travel"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
            >
              Travel
            </Link>
          </li>
          <li className="navbar__link">
            <Link
              activeClass="active"
              to="Adults welcome"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
            >
              Adults welcome
            </Link>
          </li>
          <li className="navbar__link">
            <Link
              activeClass="active"
              to="Art & Home Décor"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
            >
              Art & Home Décor
            </Link>
          </li>
          <li className="navbar__link">
            <Link
              activeClass="active"
              to="Space"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
            >
              Space
            </Link>
          </li>
          <li className="navbar__link">
            <Link
              activeClass="active"
              to="Pop Culture"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
            >
              Pop Culture
            </Link>
          </li>
          <li className="navbar__link">
            <Link
              activeClass="active"
              to="Toddlers"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
            >
              Toddlers
            </Link>
          </li>
          <li className="navbar__link">
            <Link
              activeClass="active"
              to="Real World Role Playing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
            >
              Real World Role Playing
            </Link>
          </li>
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
        {/* <iframe
          className="video__frame"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gvnvaQE2JQY?si=bbjqsRbHDD8gm39r&autoplay=1&mute=1&controls=0&modestbranding=1&disablekb=1&iv_load_policy=3"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> */}

        <video
          className="video__frame"
          part="video"
          crossOrigin=""
          playsInline
          muted
          autoPlay
          src="https://videos.pexels.com/video-files/4961512/4961512-hd_1280_720_25fps.mp4"
          preload="metadata"
          loop
        />

        {/* <div className="video__frame"></div> */}
        <div className="videoInfos">
          <h1 className="video__title">
            <div>Welcome to the</div>
            <div>Play Matters Interactive Lookbook</div>
          </h1>

          <div className="video__iconsWrapper">
            <div className="soundBtn"></div>
            <div className="downloadBtn"></div>
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
