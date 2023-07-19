import React from "react";
import "./index.scss";

import logo from "../../assets/logo-small.png";

//icon imports
import { FaHome, FaClock ,FaHeart, FaHeadphones, FaUserAlt} from "react-icons/fa";
import {HiCube} from "react-icons/hi";
import {ImBooks} from "react-icons/im";
const index = () => {

  const handleClick = (e)=>{
    //this is called when user clicks any li element
    //this function removes the selected classname from all other siblings and gives it to the selected one
    const elementSiblings = e.target.parentElement.children
    for (let i = 0; i < elementSiblings.length; i++) {
      elementSiblings[i].classList.remove('selected');
    }
    e.target.className="selected"

  }
  return (
    <div className="left-side-bar container">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <span>tunebuds</span>
      </div>
      <div className="menu side-bar-item">
        <ul>
          <span>Menu</span>
          <li className="selected" onClick={handleClick}>
            <FaHome />
            <span>Home</span>
          </li>
          <li className="" onClick={handleClick}>
            <ImBooks/>
            <span>Albums</span>
          </li>
          <li onClick={handleClick}>
            <FaUserAlt/>
            <span>Artists</span>
          </li>
          <li onClick={handleClick}>
            <HiCube/>
            <span>Discover</span>
          </li>
        </ul>
      </div>
      <div className="playlist side-bar-item">
        <ul>
          <span>Playlist</span>
          <li onClick={handleClick}>
            <FaClock />
            <span>Recent</span>
          </li>
          <li onClick={handleClick}>
            <FaHeart/>
            <span>Favorites</span>
          </li>
          <li onClick={handleClick}>
            <FaHeadphones/>
            <span>my-playlist</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
