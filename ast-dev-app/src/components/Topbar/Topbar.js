import React from "react";
import "./Topbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../assets/logo.svg";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <p class="logo">
            <img src={logo} alt="logo"/>
            T-mobile AST
          </p>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
            <AccountCircleIcon />
          </div>
          <div className="topbarIconContainer">
            <span>John Doe</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
