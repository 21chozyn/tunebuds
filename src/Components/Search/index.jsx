import React from "react";
import "./index.scss";

import { FaSearch } from "react-icons/fa";

const index = () => {
  
  return (
    <div className="search-bar">
      <FaSearch />
      <input type="search" placeholder="Search" />
    </div>
  );
};

export default index;
