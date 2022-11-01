import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./SubTopBar2.css";

function SubTopBar2() {
  return (
    <div className="subtopbar">
      <div className="topbarWrapper">
        <div className="topleft">
            <a href="../"> &lt; Back </a>
        </div>
        <div className="topright">
          <div className="username">
            <span>John Doe</span>
          </div>
          <div className="topbarIconContainer">
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubTopBar2;
