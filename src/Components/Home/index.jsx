import React from "react";
import "./index.scss";
//component imports
import LeftSideBar from "../LeftSideBar";
import RightSideBar from "../RightSideBar";
const index = () => {
  return (
    <div id="app">
      <LeftSideBar />
      <RightSideBar/>
    </div>
  );
};

export default index;
