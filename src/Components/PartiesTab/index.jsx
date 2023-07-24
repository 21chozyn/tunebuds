import React from "react";
import "./index.scss";

//function imports
import { removeSibblingClass } from "../LeftSideBar";

//component imports
import PartyCard from "../PartyCard";

//img import
import gunnaACover from "../../assets/Gunna-album-cover.jpg";

const index = () => {
  const containerRef = React.useRef(null);
  const [cardContainerWidth, setCardContainerWidth] = React.useState("");
  const handleNavTabClick = (e) => {
    removeSibblingClass(e, "show"); //to remove classname from other sibblings
    e.target.className = "show";
  };
  React.useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const newWidth = containerRef.current.getBoundingClientRect().width;

        setCardContainerWidth(newWidth);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  React.useEffect(() => {
    console.log(cardContainerWidth);
  }, [cardContainerWidth]);

  return (
    <div ref={containerRef} id="parties-container">
      <h2>Parties</h2>
      <ul>
        <li onClick={handleNavTabClick}>18 Friends</li>
        <li className="show" onClick={handleNavTabClick}>
          10 Parties
        </li>
        <li onClick={handleNavTabClick}>Find Friends</li>
        <li onClick={handleNavTabClick}>Make Party</li>
      </ul>
      <div id="cards-container" style={{height: `${cardContainerWidth-33}px`}}>
        <PartyCard
          img={gunnaACover}
          title={"Chozyns Work Out"}
          artists={"Gunna, Young thug, NBA YoungBoy"}
        />
        <PartyCard
          img={gunnaACover}
          title={"Chozyns Work Out"}
          artists={"Gunna, Young thug, NBA YoungBoy"}
        />
        <PartyCard
          img={gunnaACover}
          title={"Chozyns Work Out"}
          artists={"Gunna, Young thug, NBA YoungBoy"}
        />
        <PartyCard
          img={gunnaACover}
          title={"Chozyns Work Out"}
          artists={"Gunna, Young thug, NBA YoungBoy"}
        />
        <PartyCard
          img={gunnaACover}
          title={"Chozyns Work Out"}
          artists={"Gunna, Young thug, NBA YoungBoy"}
        />
      </div>
    </div>
  );
};

export default index;
