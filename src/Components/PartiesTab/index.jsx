import React from "react";
import "./index.scss";

//function imports
import { removeSibblingClass } from "../LeftSideBar";

//component imports
import PartyCard from "../PartyCard";

//img import
import gunnaACover from "../../assets/Gunna-album-cover.jpg";

const index = () => {
  const handleNavTabClick = (e) => {
    removeSibblingClass(e, "show"); //to remove classname from other sibblings
    e.target.className = "show";
  };
  return (
    <div id="parties-container">
      <h2>Parties</h2>
      <ul>
        <li onClick={handleNavTabClick}>18 Friends</li>
        <li className="show"  onClick={handleNavTabClick}>10 Parties</li>
        <li onClick={handleNavTabClick}>Find Friends</li>
        <li onClick={handleNavTabClick}>Make Party</li>
      </ul>
      <div className="cards-container">
        <PartyCard img={gunnaACover} title={"Chozyns Work Out"} artists={"Gunna, Young thug, NBA YoungBoy"}/>
        <PartyCard img={gunnaACover} title={"Chozyns Work Out"} artists={"Gunna, Young thug, NBA YoungBoy"}/>
        <PartyCard img={gunnaACover} title={"Chozyns Work Out"} artists={"Gunna, Young thug, NBA YoungBoy"}/>
        <PartyCard img={gunnaACover} title={"Chozyns Work Out"} artists={"Gunna, Young thug, NBA YoungBoy"}/>
        <PartyCard img={gunnaACover} title={"Chozyns Work Out"} artists={"Gunna, Young thug, NBA YoungBoy"}/>

      
      
      
      </div>
    </div>
  );
};

export default index;
