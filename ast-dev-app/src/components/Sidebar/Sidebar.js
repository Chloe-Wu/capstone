import React from "react";
import "./Sidebar.css";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="scrollboxMain">
        <Link to="/school1">
          <div className="featuredItem">
            <p className="featuredTitle">Wireframe High School</p><br/>
            <th className="widgetStatusDanger">Danger</th>
          </div>
        </Link>
        <div className="featuredItem">
          <p className="featuredTitle">School 2</p>
          <th className="widgetStatusSafe">Safe</th>
        </div>
        <div className="featuredItem">
          <p className="featuredTitle">School 3</p>
          <th className="widgetStatusSafe">Safe</th>
        </div>
        <div className="featuredItem">
          <p className="featuredTitle">School 4</p>
          <th className="widgetStatusSafe">Safe</th>
        </div>
        <div className="featuredItem">
          <p className="featuredTitle">School 5</p>
          <th className="widgetStatusSafe">Safe</th>
        </div>
        <div className="featuredItem">
          <p className="featuredTitle">School 6</p>
          <th className="widgetStatusSafe">Safe</th>
        </div>
        <div className="featuredItem">
          <p className="featuredTitle">School 7</p>
          <th className="widgetStatusSafe">Safe</th>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
