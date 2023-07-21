import React from "react";
import "./index.scss";

//component imports
import LeftSideBar from "../LeftSideBar";
import RightSideBar from "../RightSideBar";
import Search from "../Search";

const index = () => {
  return (
    <div id="app">
      <LeftSideBar />
      <div className="middle container">
        <div className="top-part">
          <Search />
          <div id="mode">
            <span>Dark Mode</span>
          </div>
        </div>
      </div>
      <RightSideBar />
    </div>
  );
};

export default index;
