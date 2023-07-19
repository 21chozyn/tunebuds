import React from "react";
import "./index.scss";

import logo from "../../assets/logo-small.png";

//icon imports
import { FaHome, FaClock ,FaHeart, FaHeadphones} from "react-icons/fa";
import {HiCube} from "react-icons/hi";

const index = () => {
  return (
    <div className="left-side-bar container">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <span>tunebuds</span>
      </div>
      <div className="menu side-bar-item">
        <ul>
          <span>Menu</span>
          <li className="selected">
            <FaHome />
            <span>Home</span>
          </li>
          <li>
            <HiCube/>
            <span>Discover</span>
          </li>
        </ul>
      </div>
      <div className="playlist side-bar-item">
        <ul>
          <span>Playlist</span>
          <li>
            <FaClock />
            <span>Recent</span>
          </li>
          <li>
            <FaHeart/>
            <span>Favorites</span>
          </li>
          <li>
            <FaHeadphones/>
            <span>my-playlist</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
