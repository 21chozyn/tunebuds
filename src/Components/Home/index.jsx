import React from "react";
import "./index.scss";

//component imports
import LeftSideBar from "../LeftSideBar";
import RightSideBar from "../RightSideBar";
import Search from "../Search";
import PartiesTab from "../PartiesTab";

//picture imports
import avatar from "../../assets/default-avatar.jpg";
const index = () => {
  const [mode, setMode] = React.useState("dark");

  const handleThemeChange = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode); //this changes the them to the selected choice
    localStorage.setItem("theme", newMode);
  };
  return (
    <div id="app">
      <LeftSideBar />
      <div className="middle container">
        <div className="top-part">
          <Search />
          <label id="mode">
            Dark Mode
            <input
              className="toggle"
              type="checkbox"
              name="dark"
              value="dark"
              checked={mode === "dark" ? false : true}
              onClick={handleThemeChange}
            />
            <span className="check"></span>
          </label>
          <div id="this-user">
            <div className="avatar-container">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="user-info">
              <p id="name">Joey Mhonde</p>
              <p id="email">panashemhondeh@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="p-r-container">
          <PartiesTab /> <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default index;
