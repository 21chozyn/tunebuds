import React from "react";
import "./index.scss";

//icon imports
import { FaExpandArrowsAlt, FaCompressArrowsAlt } from "react-icons/fa";

import avater from "../../assets/default-avatar.jpg";

const listeners = [
  { name: "metro", avater: avater, isOnline: true },
  { name: "swae_dont_give_a_fuck", avater: avater, isOnline: true },
  { name: "21chozyn", avater: avater, isOnline: true }
];
const index = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <div
      className="right-side-bar container"
      style={
        !isExpanded
          ? { flexBasis: "1%", width: "2rem" }
          : { flexBasis: "20%", width: "150px" }
      }
    >
      {isExpanded ? (
        <FaCompressArrowsAlt
          onClick={() => {
            setIsExpanded((prev) => !prev);
          }}
        />
      ) : (
        <FaExpandArrowsAlt
          onClick={() => {
            setIsExpanded((prev) => !prev);
          }}
        />
      )}
      <ul id="listeners">
        {listeners.map((listener) => (
          <li>
            <div className="avatar-container">
              <img src={listener.avater} alt="avatar" />
              {listener.isOnline && <div className="online" />}
            </div>
            <span>{listener.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;
